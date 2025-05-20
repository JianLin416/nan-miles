package models

type DataResponse struct {
	CoolerTemp  int `json:"coolerTemp"`
	IntakeTemp  int `json:"intakeTemp"`
	Speed       int `json:"speed"`
	Rpm         int `json:"rpm"`
	ThrottlePos int `json:"throttlePos"`
	OutsideTemp int `json:"outsideTemp"`
}
