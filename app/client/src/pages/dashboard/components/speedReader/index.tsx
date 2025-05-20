import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Rabbit } from "lucide-react"

export default function SpeedReader({
    speed
}: { speed?: number }) {

    return (
        <Card className="w-30 sm:w-35 md:w-45 lg:w-55 xl:w-65 2xl:w-75 h-1/3 relative overflow-hidden">
            <CardContent className="h-full flex flex-col">
                <CardDescription>
                    <Rabbit />
                </CardDescription>
                <div className="flex items-end place-content-center relative z-10 my-auto gap-2">
                    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                        {speed}
                    </div>
                    <div className="text-lg xl:text-xl">km/s</div>
                </div>
            </CardContent>
        </Card>
    )
}
