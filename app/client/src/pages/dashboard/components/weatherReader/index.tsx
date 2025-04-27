import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Sun } from "lucide-react"

export default function WeatherReader({
    weather
}: { weather: number }) {

    return (
        <Card className="w-75 h-1/3 relative overflow-hidden">
            <CardContent className="h-full flex flex-col">
                <CardDescription>
                    <Sun />
                </CardDescription>
                <div className="flex items-end place-content-center relative z-10 my-auto">
                    <div className="text-9xl">
                        {weather}
                    </div>
                    <div className="text-2xl">℃</div>
                </div>
            </CardContent>
        </Card>
    )
}
