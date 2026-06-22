export function WorksModalContent({ images, innerNodes }: { images: string[]; innerNodes: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-y-4 h-[80vh]">
            <div className="w-full grid grid-cols-2 justify-items-center gap-4">
                {images.map((src, index) => (
                    <img key={index} src={src} className="object-cover h-full w-full aspect-4/3"/>
                ))}
            </div>
            <div className="flex flex-col gap-y-4 p-8 w-full">
                  {innerNodes}
            </div>
        </div>
    )
}