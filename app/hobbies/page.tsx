"use client";

import { motion } from "framer-motion";
import {FaGamepad, FaDiceD20, FaMusic, FaLaptop, FaMountain, FaYoutubeSquare} from "react-icons/fa";

export default function HobbiesPage() {
    return (
        <section className="mx-auto max-w-5xl py-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-yellow-300 dark:from-blue-950 dark:to-black opacity-20" />
            {/* Page Header */}
            <motion.h1
                className="text-6xl font-bold tracking-tight text-center text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Hobbies
            </motion.h1>

            <motion.p
                className="mt-4 text-center text-gray-600 dark:text-white max-w-1xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                These are some of the things I love to do outside of coding! They help me relax,
                stay creative, and enjoy life!
            </motion.p>

            {/* Hobby Grid */}
            {/* STACKED HOBBY ROWS */}
            {/* Hobby Grid - 3x2 clean layout */}
            <motion.div
                className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                {/* Hobby Card Component */}
                {/* VIDEO GAMES */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="p-10 rounded-xl bg-black dark:bg-white text-white dark:text-black shadow border border-gray-300
               flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                    <FaGamepad className="text-5xl text-purple-700 dark:text-black mb-3" />
                    <h2 className="text-2xl font-semibold">Video Games</h2>
                </motion.div>

                {/* D&D */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="p-10 rounded-xl bg-black dark:bg-white dark:text-black text-white shadow border border-gray-300
               flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                    <FaDiceD20 className="text-5xl text-purple-700 dark:text-black mb-3" />
                    <h2 className="text-2xl font-semibold">Dungeons & Dragons</h2>
                </motion.div>

                {/* Tech */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="p-10 rounded-xl bg-black dark:bg-white text-white dark:text-black shadow border border-gray-300
               flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                    <FaLaptop className="text-5xl text-purple-700 dark:text-black mb-3" />
                    <h2 className="text-2xl font-semibold">Tech</h2>
                </motion.div>

                {/* Music */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="p-10 rounded-xl bg-black dark:bg-white text-white dark:text-black shadow border border-gray-300
               flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                    <FaMusic className="text-5xl text-purple-700 dark:text-black mb-3" />
                    <h2 className="text-2xl font-semibold">Music</h2>
                </motion.div>

                {/* Caving */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="p-10 rounded-xl bg-black dark:bg-white text-white shadow border dark:text-black border-gray-300
               flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                    <FaMountain className="text-5xl text-purple-700 dark:text-black mb-3" />
                    <h2 className="text-2xl font-semibold">Caving</h2>
                </motion.div>

                {/* Glitch Buddies */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="p-10 rounded-xl bg-black dark:bg-white dark:text-black text-white shadow border border-gray-300
               flex flex-col items-center text-center hover:scale-105 transition-transform"
                >
                    <FaYoutubeSquare className="text-5xl text-purple-700 dark:text-black mb-3" />
                    <h2 className="text-2xl font-semibold">Glitch Buddies</h2>
                </motion.div>
            </motion.div>
        </section>
    );
}