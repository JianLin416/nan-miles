import {
    Card,
    CardContent,
    CardDescription
} from "@/components/ui/card"

export default function Throttle({
    throttlePos
}: { throttlePos: number }) {
    return (
        <Card className="w-30 sm:w-35 md:w-45 lg:w-55 xl:w-65 2xl:w-75 h-1/3">
            <CardContent className="h-full flex flex-col">
                <CardDescription>节气门位置</CardDescription>
                <div className="flex items-end place-content-center my-auto gap-2">
                    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                        {throttlePos}
                    </div>
                    <div className="text-xl xl:text-2xl">%</div>
                </div>
            </CardContent>
        </Card>
    )
}
