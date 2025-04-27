import { CardDescription } from "@/components/ui/card";
import { Waves } from "lucide-react";

export default function CoolerTemp({
    className,
    coolerTemp
}: {
    className?: string,
    coolerTemp: number
}) {
    return (
        <div className={"flex flex-col h-1/3" + className ? className : ""}>
            <CardDescription>
                <div className="flex gap-1 items-center">
                    <Waves />
                    <p>冷却液温度</p>
                </div>
            </CardDescription>
            <div className="flex items-end place-content-center">
                <div className="text-9xl">
                    {coolerTemp}
                </div>
                <div className="text-2xl"> °C</div>
            </div>
        </div>
    )
}