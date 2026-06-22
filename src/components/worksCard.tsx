import { useRef } from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export type WorksCategory = "Web" | "動画" | "研究" | "その他"

export interface LinkProps {
    href: string;
    label: string;
}

export interface WorksProps {
    title: string;
    category: WorksCategory;
    date: string;
    imageSrc: string | undefined;
    body: React.ReactNode;
    modalBody?: React.ReactNode;
    link?: LinkProps;
}

export function WorksCard({ title, category, date, imageSrc, body, modalBody, link }: WorksProps) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const badgeColor = category === "Web" ? "badge-info" : category === "動画" ? "badge-success" : category === "研究" ? "badge-warning" : "badge-accent";
    return (
        <>
            <div className="card rounded-2xl bg-base-100 w-96 shadow-sm overflow-clip max-w-full">
                <figure>
                    <img
                        src={imageSrc ? imageSrc : "/img/sample.png"}
                        className="object-cover h-full w-full aspect-4/3"
                    />
                </figure>
                <div className="card-body p-5 flex flex-col gap-y-4 pb-10">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex items-center">
                        <span className={`badge ${badgeColor}`}>{category}</span>
                        <span className="text-sm text-gray-500 ml-2">{date}</span>
                    </div>
                    {body}
                    <div className="card-actions justify-end">
                        {link && (
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-soft btn-info">
                                {link.label}
                                <FaExternalLinkAlt />
                            </a>
                        )}
                        {modalBody && (
                            <label onClick={() => modalRef.current?.showModal()} className="btn btn-soft btn-accent">More <FaArrowRight /></label>
                        )}
                    </div>
                </div>
            </div>
            {modalBody && (
                <dialog ref={modalRef} className="modal">
                    <div className="modal-box max-w-none p-0 lg:max-w-[80vw] relative">
                        {modalBody}
                    </div>
                    <div className="absolute bottom-0 right-0 w-full flex justify-center p-8">
                            <form method="dialog">
                                <button className="btn">閉じる</button>
                            </form>
                    </div>
                </dialog>
            )}
        </>
    )
}
