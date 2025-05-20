import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Gauge } from "lucide-react"

export default function RpmReader({
    rpm
}: { rpm: number }) {

    return (
        <Card className="w-30 sm:w-35 md:w-45 lg:w-55 xl:w-65 2xl:w-75 h-1/3 relative overflow-hidden">
            <CardContent className="h-full flex flex-col">
                <CardDescription>
                    <Gauge />
                </CardDescription>
                <div className="flex items-end place-content-center relative z-10 my-auto gap-2">
                    <div className="text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl">
                        {rpm}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
