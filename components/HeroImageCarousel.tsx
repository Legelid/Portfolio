"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {ChevronRight, ChevronLeft} from "lucide-react";

const images = [
    "/hero/andrew7.svg",
    "/hero/LeggyBig1.png",
    "/hero/img_1010.png",
    "/hero/533089473_10229661582508279_6120591912680360637_n.jpg",
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
        <div className="relative w-72 h-72 sm:w-[360px] sm:h-[360px] md:w-[408px] md:h-[408px] flex items-center justify-center">

            {/* Left Arrow */}
            <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="
          absolute left-2 md:left-[-2.5rem]
          p-1.5 md:p-2 rounded-full
          bg-white/70 dark:bg-black/60
          text-gray-800 dark:text-gray-100
          hover:scale-110 transition
          shadow-md
          min-w-[44px] min-h-[44px] flex items-center justify-center
        "
            >
                <ChevronLeft size={18} className="md:w-5 md:h-5" />
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
          absolute right-2 md:right-[-2.5rem]
          p-1.5 md:p-2 rounded-full
          bg-white/70 dark:bg-black/60
          text-gray-800 dark:text-gray-100
          hover:scale-110 transition
          shadow-md
          min-w-[44px] min-h-[44px] flex items-center justify-center
        "
            >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>

            {/* Optional subtle glow */}
            <div className="absolute -inset-4 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-2xl -z-10" />
        </div>
    );
}
