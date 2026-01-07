"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {ChevronRight, ChevronLeft} from "lucide-react";

const images = [
    "/hero/LeggyBig1.png",
    "/hero/img_1010.png",
    "/hero/533089473_10229661582508279_6120591912680360637_n.jpg"
];

export default function HeroImageCarousel() {
    const [index, setIndex] = useState(0);

    const prevImage = () => {
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };

    const nextImage = () => {
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    return (
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center">

            {/* Left Arrow */}
            <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="
          absolute left-[-2.5rem]
          p-2 rounded-full
          bg-white/70 dark:bg-black/60
          text-gray-800 dark:text-gray-100
          hover:scale-110 transition
          shadow-md
        "
            >
                <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                <Image
                    key={images[index]}
                    src={images[index]}
                    alt="Hero photo"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Right Arrow */}
            <button
                onClick={nextImage}
                aria-label="Next photo"
                className="
          absolute right-[-2.5rem]
          p-2 rounded-full
          bg-white/70 dark:bg-black/60
          text-gray-800 dark:text-gray-100
          hover:scale-110 transition
          shadow-md
        "
            >
                <ChevronRight size={20} />
            </button>

            {/* Optional subtle glow */}
            <div className="absolute -inset-4 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-2xl -z-10" />
        </div>
    );
}