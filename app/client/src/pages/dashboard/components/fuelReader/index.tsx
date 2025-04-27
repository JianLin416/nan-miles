import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Fuel } from "lucide-react"

export default function FuelReader({
    fuelLast
}: { fuelLast: number }) {

    const getBackGroundColor = (fuelLast: number) => {
        if (fuelLast <= 33) return "bg-red-500/25"
        else if (fuelLast <= 66) return "bg-yellow-500/25"
        else return "bg-green-500/25"
    }

    return (
        <Card className="w-75 h-1/3 relative overflow-hidden">
            <CardContent className="h-full flex flex-col">
                <CardDescription>
                    <Fuel />
                </CardDescription>
                <div className="flex items-end place-content-center relative z-10 my-auto">
                    <div className="text-9xl">
                        {fuelLast}
                    </div>
                    <div className="text-2xl">%</div>
                </div>

                <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{ height: `${fuelLast}%` }}
                >
                    <div
                        className={`absolute bottom-0 left-0 w-[200%] h-full ${getBackGroundColor(fuelLast)}`}
                    />
                </div>
            </CardContent>
        </Card>
    )
}
