package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"server/src"
	"server/src/models"
	"server/src/utils"
	"time"

	"github.com/gorilla/websocket"
)

func CheckPort(port int) bool {
	ln, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return false
	}
	_ = ln.Close()
	return true
}

func main() {
	port := 8080

	for {
		if CheckPort(port) {
			break
		}
		port++
	}

	utils.RunCommand("sudo ip link set can0 down")
	utils.RunCommand("sudo ip link set can0 type can bitrate 500000")
	utils.RunCommand("sudo ip link set can0 up")

	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}

	data := make(chan [8]uint8, 1024)

	dataResponse := &models.DataResponse{}

	killConnection := make(chan struct{})
	connection := utils.GetConnection(killConnection, data)
	if connection != nil {
		fmt.Println("CAN连接成功")
	} else {
		log.Fatal("无法建立CAN连接")
	}

	defer close(killConnection)
	defer connection.Close()
	defer close(data)

	ticker := time.NewTicker(time.Second / 15)
	defer ticker.Stop()

	http.HandleFunc(
		"/ws/get_data",
		func(w http.ResponseWriter, r *http.Request) {
			src.DataReader(
				w,
				r,
				upgrader,
				connection,
				killConnection,
				data,
				ticker,
				dataResponse,
			)
		},
	)

	fmt.Println("server started on :", port)
	if err := http.ListenAndServe(":"+fmt.Sprint(port), nil); err != nil {
		fmt.Println("server start error: ", err)
	}

}
