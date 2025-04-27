import { useEffect, useState } from "react";
import FuelReader from "./components/fuelReader/index";
import TempComposer from "./components/tempComposer";
import Throttle from "./components/throttle/index";
import WeatherReader from "./components/weatherReader";
import RadioCast from "./components/radioCast";

interface DataResponse {
    fuelLast: number,
    coolerTemp: number,
    intakeTemp: number,
    oilTemp: number,
    throttlePos: number,
    weather: number
}

export default function DashBoard() {

    const [fuelLast, setFuelLast] = useState(0)
    const [coolerTemp, setCoolerTemp] = useState(0)
    const [intakeTemp, setIntakeTemp] = useState(0)
    const [oilTemp, setOilTemp] = useState(0)
    const [throttlePos, setThrottlePos] = useState(0)
    const [weather, setWeather] = useState(0)

    let ws: WebSocket
    let data: any
    let currentPort = 8080

    function connect() {
        ws = new WebSocket(`ws://127.0.0.1:${currentPort}/ws/get_data`);

        ws.onopen = function () {
            console.log(`Connected to WebSocket server on port ${currentPort}`);
        };

        ws.onmessage = function (event) {
            data = JSON.parse(event.data) as DataResponse
            setFuelLast(data.fuelLast)
            setCoolerTemp(data.coolerTemp)
            setIntakeTemp(data.intakeTemp)
            setOilTemp(data.oilTemp)
            setThrottlePos(data.throttlePos)
            setWeather(data.weather)
            console.log("Received data:", data);
        };

        ws.onclose = function () {
            console.log(`WebSocket connection closed on port ${currentPort}, trying next port...`);
            currentPort++
            setTimeout(connect, 5000);
        };

        ws.onerror = function (error) {
            console.error(`WebSocket error on port ${currentPort}:`, error);
        };
    }

    useEffect(() => {
        connect()

        return () => {
            if (ws) {
                ws.close()
            }
        }
    }, [])

    return (
        <div className="flex h-screen gap-6 flex-row-reverse p-15">
            <div className="flex flex-col justify-between gap-6">
                <WeatherReader weather={weather} />
                <FuelReader fuelLast={fuelLast} />
                <Throttle throttlePos={throttlePos} />
            </div>
            <TempComposer
                oilTemp={oilTemp}
                coolerTemp={coolerTemp}
                intakeTemp={intakeTemp}
            />
            <RadioCast />
        </div>
    )
}