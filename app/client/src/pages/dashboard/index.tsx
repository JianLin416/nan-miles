import { useEffect, useState } from "react";
import SpeedReader from "./components/speedReader/index";
import TempComposer from "./components/tempComposer";
import Throttle from "./components/throttle/index";
import RpmReader from "./components/rpmReader";
import RadioCast from "./components/radioCast";

interface DataResponse {
    speed: number,
    coolerTemp: number,
    intakeTemp: number,
    rpm: number,
    throttlePos: number,
    outsideTemp: number
}

export default function DashBoard() {

    const [speed, setSpeed] = useState(0)
    const [rpm, setRpm] = useState(0)
    const [coolerTemp, setCoolerTemp] = useState(0)
    const [intakeTemp, setIntakeTemp] = useState(0)
    const [throttlePos, setThrottlePos] = useState(0)
    const [outsideTemp, setOutsideTemp] = useState(0)

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
            setSpeed(data.speed)
            setCoolerTemp(data.coolerTemp)
            setIntakeTemp(data.intakeTemp)
            setRpm(data.rpm)
            setThrottlePos(data.throttlePos)
            setOutsideTemp(data.outsideTemp)
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
        <div className="flex h-screen gap-3 xl:gap-6 flex-row-reverse p-5 xl:p-15">
            <div className="flex flex-col justify-between gap-3 xl:gap-6">
                <RpmReader rpm={rpm} />
                <SpeedReader speed={speed} />
                <Throttle throttlePos={throttlePos} />
            </div>
            <TempComposer
                outsideTemp={outsideTemp}
                coolerTemp={coolerTemp}
                intakeTemp={intakeTemp}
            />
            <RadioCast />
        </div>
    )
}