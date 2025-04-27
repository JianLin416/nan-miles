export default function RadioCast() {
    return (
        <div className="flex-1 h-full flex flex-col items-center justify-center bg-muted rounded-xl">
            <iframe
                src="https://www.radiocast.co"
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div >
    )
}