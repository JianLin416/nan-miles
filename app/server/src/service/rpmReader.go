package service

import (
	"context"
	"log"
	"net"

	"go.einride.tech/can"
	"go.einride.tech/can/pkg/socketcan"
)

func RpmReader(
	canConnection net.Conn,
) {
	frame := can.Frame{
		ID:     0x7DF,
		Length: 8,
		Data:   [8]uint8{0x02, 0x01, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00},
	}
	tx := socketcan.NewTransmitter(canConnection)
	transmitErr := tx.TransmitFrame(context.Background(), frame)

	if transmitErr != nil {
		log.Fatal("读取转速失败: ", transmitErr)
	}
}
