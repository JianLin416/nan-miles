import { Card, CardContent } from "@/components/ui/card";
import IntakeTemp from "./intakeTemp";
import CoolerTemp from "./coolerTemp";
import OutsideTemp from "./outsideTemp";

export default function TempComposer({
    coolerTemp,
    outsideTemp,
    intakeTemp
}: {
    coolerTemp: number
    outsideTemp: number
    intakeTemp: number
}) {
    return (
        <Card className="w-30 sm:w-35 md:w-45 lg:w-55 xl:w-65 2xl:w-75">
            <CardContent className="flex flex-col justify-between py-5 h-full">
                <OutsideTemp outsideTemp={outsideTemp} />
                <CoolerTemp coolerTemp={coolerTemp} />
                <IntakeTemp intakeTemp={intakeTemp} />
            </CardContent>
        </Card>
    )
}