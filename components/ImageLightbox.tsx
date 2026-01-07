"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
    src: string;
    alt?: string;
    onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: Props) {
    // Close on ESC key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt ?? "Project image"}
                    width={1600}
                    height={900}
                    className="object-contain rounded-lg"
                />
            </div>
        </div>
    );
}