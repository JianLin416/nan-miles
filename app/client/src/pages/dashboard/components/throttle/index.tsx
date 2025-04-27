import {
    Card,
    CardContent,
    CardDescription
} from "@/components/ui/card"

export default function Throttle({
    throttlePos
}: { throttlePos: number }) {
    return (
        <Card className="w-75 h-1/3">
            <CardContent className="h-full flex flex-col">
                <CardDescription>节气门位置</CardDescription>
                <div className="flex items-end place-content-center my-auto">
                    <div className="text-9xl">{throttlePos}</div>
                    <div className="text-2xl">%</div>
                </div>
            </CardContent>
        </Card>
    )
}
