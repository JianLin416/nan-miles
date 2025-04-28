import { CardDescription } from "@/components/ui/card";
import { Wind } from "lucide-react";

export default function IntakeTemp({
    className,
    intakeTemp
}: {
    className?: string,
    intakeTemp: number
}) {
    return (
        <div className={"flex flex-col h-1/3" + className ? className : ""}>
            <CardDescription>
                <div className="flex gap-1 items-center">
                    <Wind />
                    <p>进气温度</p>
                </div>
            </CardDescription>
            <div className="flex items-end place-content-center gap-2">
                <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                    {intakeTemp}
                </div>
                <div className="text-xl xl:text-2xl"> °C</div>
            </div>
        </div>
    )
}
