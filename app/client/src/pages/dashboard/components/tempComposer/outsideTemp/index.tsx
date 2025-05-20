import { CardDescription } from "@/components/ui/card";
import { Sun } from "lucide-react";

export default function OutsideTemp({
    className,
    outsideTemp
}: {
    className?: string,
    outsideTemp: number
}) {
    return (
        <div className={"flex flex-col h-1/3" + className ? className : ""}>
            <CardDescription>
                <Sun />
            </CardDescription>
            <div className="flex items-end place-content-center relative z-10 my-auto gap-2">
                <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                    {outsideTemp}
                </div>
                <div className="text-xl xl:text-2xl">℃</div>
            </div>
        </div>
    )
}