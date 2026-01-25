"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import CompanyCarousel from "../../components/CompanyCarousel";
import HeroImageCarousel from "@/components/HeroImageCarousel";


export default function AboutPage() {
    return (
        <section className="py-20 md:py-40 px-4 md:px-0">
            <div className="mx-auto max-w-5xl">

                {/* Profile Section */}
                <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full
              bg-purple-300 opacity-30 blur-3xl
              dark:bg-purple-900 dark:opacity-40"
                        />

                        <HeroImageCarousel />
                    </div>

                    {/* Social Icons */}
                    <div className="mt-4 flex gap-4">
                        <a
                            href="https://github.com/Legelid"
                            target="_blank"
                            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-500 transition-colors text-2xl"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://discord.gg/Wqnkpg6gSr"
                            target="_blank"
                            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-500 transition-colors text-2xl"
                        >
                            <FaDiscord />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/andrew-collins-528117137/"
                            target="_blank"
                            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-500 transition-colors text-2xl"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:andrewcollins0910@gmail.com"
                            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-500 transition-colors text-2xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* About Text Section */}
                <motion.div
                    className="flex flex-col items-center text-center mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
                >
                    <h1 className="mt-10 text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                        About Me
                    </h1>

                    <p className="mt-3 text-base md:text-xl text-gray-500 dark:text-gray-400">
                        IT Specialist · Systems & Technology · Aspiring Developer
                    </p>

                    <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
                        Hi, I'm <span className="font-bold text-purple-900 dark:text-purple-400">Andrew</span>!
                        I like taking apart digital devices, figuring out how they work, and putting them back together without extra screws (most of the time).
                    </p>

                    {/* Button */}
                    <div className="mt-10 md:mt-16">
                        <a
                            href="/projects"
                            className="
                px-6 py-3 md:px-10 md:py-4 rounded-xl
                bg-purple-700 text-white hover:bg-purple-800
                dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500
                text-lg md:text-xl font-semibold shadow-lg transition-all
              "
                        >
                            View My Projects
                        </a>
                    </div>



                    <div className="mt-24 md:mt-48">
                        <p className="text-sm text-gray-400 text-center mb-4">
                            Tools & Platforms I've Worked With
                        </p>
                    </div>
                        <CompanyCarousel />

                    {/* Professional Network Section */}
                    <div className="mt-16 md:mt-24">
                        <p className="text-sm text-gray-400 text-center mb-4">
                            Professional Network
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-6">
                            Professionals I collaborate with, learn from, and trust.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                            {/* Adam Comer */}
                            <a
                                href="https://atccreative.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 p-6 rounded-xl
                                           bg-gray-100/50 dark:bg-gray-800/50
                                           border border-gray-200/50 dark:border-gray-700/50
                                           hover:bg-gray-100 dark:hover:bg-gray-800
                                           transition-colors"
                            >
                                <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 relative">
                                    <Image
                                        src="/network/adam-comer.png"
                                        alt="Adam Comer"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-800 dark:text-gray-200 font-medium text-base">
                                        Adam Comer
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Graphic Designer
                                    </p>
                                </div>
                            </a>

                            {/* Dalton McCleery */}
                            <a
                                href="https://daltonmccleery.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 p-6 rounded-xl
                                           bg-gray-100/50 dark:bg-gray-800/50
                                           border border-gray-200/50 dark:border-gray-700/50
                                           hover:bg-gray-100 dark:hover:bg-gray-800
                                           transition-colors"
                            >
                                <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 relative">
                                    <Image
                                        src="/network/dalton-mccleery.png"
                                        alt="Dalton McCleery"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-800 dark:text-gray-200 font-medium text-base">
                                        Dalton McCleery
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Frontend Developer
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
