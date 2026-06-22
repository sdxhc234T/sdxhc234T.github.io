function PersonaCard({ title, body, imageSrc }: { title: string; body: React.ReactNode; imageSrc: string }) {
    return (
        <div
            className="card rounded-2xl bg-base-100 w-96 shadow-sm overflow-clip max-w-full"
        >
            <figure>
                <img
                    src={imageSrc}
                    className="object-cover h-full w-full aspect-4/3"
                />
            </figure>
            <div className="card-body p-5 flex flex-col gap-y-4 pb-10">
                <h2 className="card-title font-bold">{title}</h2>
                {body}
            </div>
        </div>
    )
}

export default PersonaCard