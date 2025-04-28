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
        <Card className="w-30 sm:w-35 md:w-45 lg:w-55 xl:w-65 2xl:w-75">
            <CardContent className="flex flex-col justify-between py-5 h-full">
                <CoolerTemp coolerTemp={coolerTemp} />
                <OilTemp oilTemp={oilTemp} />
                <IntakeTemp intakeTemp={intakeTemp} />
            </CardContent>
        </Card>
    )
}