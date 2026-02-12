"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    src?: string;
    images?: string[];
    initialIndex?: number;
    alt?: string;
    onClose: () => void;
};

export default function ImageLightbox({ src, images, initialIndex = 0, alt, onClose }: Props) {
    // Determine which mode: single image or carousel
    const isCarousel = images && images.length > 0;
    const imageList = isCarousel ? images : src ? [src] : [];
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Navigation handlers
    const prevImage = () => {
        setCurrentIndex((i) => (i === 0 ? imageList.length - 1 : i - 1));
    };

    const nextImage = () => {
        setCurrentIndex((i) => (i === imageList.length - 1 ? 0 : i + 1));
    };

    // Keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    if (imageList.length === 0) return null;

    const showNavigation = imageList.length > 1;
    const currentImage = imageList[currentIndex];

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Previous Button */}
                {showNavigation && (
                    <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-[-3rem] p-2 rounded-full bg-white/70 dark:bg-black/60 text-gray-800 dark:text-gray-100 hover:scale-110 transition shadow-md min-w-[44px] min-h-[44px] flex items-center justify-center"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}

                {/* Image */}
                <div className="relative">
                    <Image
                        src={currentImage}
                        alt={alt ?? "Project image"}
                        width={1600}
                        height={900}
                        className="object-contain rounded-lg max-h-[90vh]"
                    />

                    {/* Image Counter */}
                    {showNavigation && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-sm">
                            {currentIndex + 1} / {imageList.length}
                        </div>
                    )}
                </div>

                {/* Next Button */}
                {showNavigation && (
                    <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-[-3rem] p-2 rounded-full bg-white/70 dark:bg-black/60 text-gray-800 dark:text-gray-100 hover:scale-110 transition shadow-md min-w-[44px] min-h-[44px] flex items-center justify-center"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}
            </div>

            {/* Dot Indicators */}
            {showNavigation && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {imageList.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to image ${idx + 1}`}
                            className={`w-2 h-2 rounded-full transition ${
                                idx === currentIndex
                                    ? "bg-white scale-125"
                                    : "bg-white/40 hover:bg-white/60"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}