"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type ProjectCardProps = {
    title: string;
    description: string;
    image?: string; // single image (backward compatible)
    images?: string[]; // multiple images (new feature)
    techStack?: string[]; // tech stack pill badges
};

export function ProjectCard({ title, description, image, images, techStack }: ProjectCardProps) {
    const [open, setOpen] = useState(false);

    const hasImages = images && images.length > 0;
    const displayImage = hasImages ? images[0] : image;

    return (
        <>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm flex flex-col">

                {/* Project Image - Single thumbnail for all cases */}
                {displayImage && (
                    <button
                        onClick={() => setOpen(true)}
                        className="mb-4 rounded-lg overflow-hidden group relative aspect-video"
                    >
                        <Image
                            src={displayImage}
                            alt={`${title} screenshot`}
                            fill
                            className="object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                        {/* Badge showing image count for multi-image projects */}
                        {hasImages && images.length > 1 && (
                            <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium">
                                {images.length} photos
                            </div>
                        )}
                    </button>
                )}

                {/* Title */}
                <h2 className="text-xl font-semibold">{title}</h2>

                {/* Description */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Tech Stack Pills */}
                {techStack && techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-full
                                           bg-purple-100 text-purple-700
                                           dark:bg-purple-900/30 dark:text-purple-300
                                           border border-purple-200 dark:border-purple-800"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {open && (
                <ImageLightbox
                    images={hasImages ? images : undefined}
                    src={!hasImages ? image : undefined}
                    initialIndex={0}
                    alt={`${title} full view`}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}