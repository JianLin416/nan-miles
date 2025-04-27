import { Card, CardContent } from "@/components/ui/card";
import IntakeTemp from "./intakeTemp";
import CoolerTemp from "./coolerTemp";
import OilTemp from "./oilTemp";

export default function TempComposer({
    coolerTemp,
    oilTemp,
    intakeTemp
}: {
    coolerTemp: number
    oilTemp: number
    intakeTemp: number
}) {
    return (
        <Card className="w-75">
            <CardContent className="flex flex-col justify-evenly gap-15 h-full">
                <CoolerTemp coolerTemp={coolerTemp} />
                <OilTemp oilTemp={oilTemp} />
                <IntakeTemp intakeTemp={intakeTemp} />
            </CardContent>
        </Card>
    )
}