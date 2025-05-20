package utils

import (
	"context"
	"log"
	"net"

	"go.einride.tech/can"
	"go.einride.tech/can/pkg/socketcan"
)

func GetConnection(killConnection chan struct{}, data chan [8]uint8) (conn net.Conn) {
	conn, err := socketcan.DialContext(context.Background(), "can", "can0")
	if err != nil {
		log.Fatal("连接can失败", err)
	}

	var frame can.Frame

	go func() {
		recv := socketcan.NewReceiver(conn)
		for recv.Receive() {
			select {
			case <-killConnection:
				return
			default:
				frame = recv.Frame()

				if frame.ID == 0x7E8 {
					data <- frame.Data
				}
			}
		}
	}()

	return conn
}
