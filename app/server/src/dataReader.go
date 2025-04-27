package src

import (
	"fmt"
	"net"
	"net/http"
	"sync"

	"server/src/models"
	"server/src/service"
	"time"

	"encoding/json"

	"github.com/gorilla/websocket"
)

func DataReader(
	w http.ResponseWriter,
	r *http.Request,
	upgrader websocket.Upgrader,
	canConnection net.Conn,
	killConnection chan struct{},
	data chan [8]uint8,
	ticker *time.Ticker,
	dataResponse *models.DataResponse,
) {
	mu := sync.Mutex{}

	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("升级websocket连接失败: ", err)
		return
	}

	conn.SetPingHandler(func(appData string) error {
		err := conn.WriteControl(websocket.PongMessage, []byte(appData), time.Now().Add(time.Second))
		if err != nil {
			return err
		}
		return nil
	})

	for {
		select {
		case <-ticker.C:
			service.CoolerReader(canConnection)
			service.FuelReader(canConnection)
			service.IntakeReader(canConnection)
			service.OilTempReader(canConnection)
			service.ThrottleReader(canConnection)
			service.WeatherReader(canConnection)

			mu.Lock()
			jsonData, _ := json.Marshal(dataResponse)
			mu.Unlock()

			err = conn.WriteMessage(websocket.TextMessage, jsonData)
			if err != nil {
				fmt.Println("发送到客户端失败: ", err)
				return
			}

		case msg := <-data:

			if msg[1] == 0x41 && msg[2] == 0x05 {
				mu.Lock()
				dataResponse.CoolerTemp = int(int16(msg[3]) - 40)
				mu.Unlock()
			}

			if msg[1] == 0x41 && msg[2] == 0x2F {
				mu.Lock()
				dataResponse.FuelLast = int((int16(msg[3]) * 100) / 255)
				mu.Unlock()
			}

			if msg[1] == 0x41 && msg[2] == 0x0F {
				mu.Lock()
				dataResponse.IntakeTemp = int(int16(msg[3]) - 40)
				mu.Unlock()
			}

			if msg[1] == 0x41 && msg[2] == 0x5C {
				mu.Lock()
				dataResponse.OilTemp = int(int16(msg[3]) - 40)
				mu.Unlock()
			}

			if msg[1] == 0x41 && msg[2] == 0x11 {
				mu.Lock()
				dataResponse.ThrottlePos = int((int16(msg[3]) * 100) / 255)
				mu.Unlock()
			}

			if msg[1] == 0x41 && msg[2] == 0x46 {
				mu.Lock()
				dataResponse.Weather = int(int16(msg[3] - 40))
				mu.Unlock()
			}

		case <-killConnection:
			return
		}
	}

}
