import { CardDescription } from "@/components/ui/card";
import { Flame } from "lucide-react";

export default function OilTemp({
    className,
    oilTemp
}: {
    className?: string,
    oilTemp: number
}) {
    return (
        <div className={"flex flex-col h-1/3" + className ? className : ""}>
            <CardDescription>
                <div className="flex gap-1 items-center">
                    <Flame />
                    <p>机油温度</p>
                </div>
            </CardDescription>
            <div className="flex items-end place-content-center">
                <div className="text-9xl">
                    {oilTemp}
                </div>
                <div className="text-2xl"> °C</div>
            </div>
        </div>
    )
}