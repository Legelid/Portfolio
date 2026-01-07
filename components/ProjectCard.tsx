"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type ProjectCardProps = {
    title: string;
    description: string;
    image?: string; // optional image
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm flex flex-col">

                {/* Project Image */}
                {image && (
                    <button
                        onClick={() => setOpen(true)}
                        className="mb-4 rounded-lg overflow-hidden group"
                    >
                        <Image
                            src={image}
                            alt={`${title} screenshot`}
                            width={800}
                            height={450}
                            className="object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                    </button>
                )}

                {/* Title */}
                <h2 className="text-xl font-semibold">{title}</h2>

                {/* Description */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Lightbox */}
            {open && image && (
                <ImageLightbox
                    src={image}
                    alt={`${title} full view`}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}