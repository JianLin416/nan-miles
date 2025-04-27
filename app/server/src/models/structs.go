package models

type DataResponse struct {
	FuelLast    int `json:"fuelLast"`
	CoolerTemp  int `json:"coolerTemp"`
	IntakeTemp  int `json:"intakeTemp"`
	OilTemp     int `json:"oilTemp"`
	ThrottlePos int `json:"throttlePos"`
	Weather     int `json:"weather"`
}
