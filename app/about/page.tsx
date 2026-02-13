"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import HomepageProjectCard from "../../components/HomepageProjectCard";

export default function AboutPage() {
    return (
        <section className="py-20 md:py-40 px-4 md:px-0">
            <div className="mx-auto max-w-5xl">

                {/* ── Hero: Two-Column Layout ── */}
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* LEFT COLUMN — Photo */}
                    <div className="flex flex-col items-center gap-4 shrink-0 w-full md:w-2/5">

                        {/* Glow + Photo */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full
                                bg-purple-300 opacity-30 blur-3xl
                                dark:bg-purple-900 dark:opacity-40"
                            />
                            <Image
                                src="/hero/andrew7.svg"
                                alt="Andrew Collins"
                                width={340}
                                height={340}
                                className="relative rounded-2xl object-cover"
                                priority
                            />
                        </div>

                        {/* Social Icons — stay under photo */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Legelid"
                                target="_blank"
                                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-500 transition-colors text-2xl"
                            >
                                <FaGithub />
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
                    </div>

                    {/* RIGHT COLUMN — Text */}
                    <div className="flex flex-col w-full md:w-3/5 text-center md:text-left">

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                            Andrew Collins
                        </h1>

                        <p className="mt-3 text-base md:text-xl text-gray-600 dark:text-gray-300 font-medium">
                            Full Stack Developer · PHP / Laravel / JavaScript
                        </p>

                        <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
                            Available for hire — Indianapolis, IN · Open to remote
                        </p>

                        <p className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                            I build full stack web applications with PHP, Laravel, and JavaScript.
                              I also understand the infrastructure they run on. Before I wrote code,
                            I managed systems and networks for 500+ users. That means I don't just
                            build the app; I understand how it's deployed, where it can break,
                            and how to keep it running.
                        </p>

                        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                            Currently looking for a full stack or backend role where I can build
                            real tools that solve real problems.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center md:items-start">
                            <a
                                href="/projects"
                                className="px-6 py-3 md:px-10 md:py-4 rounded-xl
                                           bg-purple-700 text-white hover:bg-purple-800
                                           dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500
                                           text-lg md:text-xl font-semibold shadow-lg transition-all"
                            >
                                View My Work
                            </a>
                            <a
                                href="https://www.linkedin.com/in/andrew-collins-528117137/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 md:px-10 md:py-4 rounded-xl
                                           border-2 border-purple-700 text-purple-700 hover:bg-purple-50
                                           dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400/10
                                           text-lg md:text-xl font-semibold transition-all"
                            >
                                Get in Touch →
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
                >
                    {/* ── What I've Built ── */}
                    <div className="mt-16 md:mt-24 w-full">
                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white">
                                What I've Built
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-center mt-2 text-sm">
                                A couple of projects that show how I think and what I build. More on the way.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <HomepageProjectCard
                                title="PTO Management System"
                                tagline="Full stack leave tracking for workplace teams"
                                description="Managing employee time-off manually means spreadsheets, missed requests, and no visibility into team availability. I built a full stack system that handles the entire workflow — request submission, manager approval, balance tracking, and reporting — in one place."
                                tags={["PHP", "Laravel", "Filament", "MySQL", "Tailwind CSS"]}
                                githubUrl="https://github.com/Legelid/PTO-Management"
                            />
                            <HomepageProjectCard
                                title="Last I Did"
                                tagline="iOS activity tracker built in SwiftUI"
                                description="'When did I last change the car oil?' or 'How long since I called my mom?' Last I Did is a lightweight iOS app for logging recurring personal tasks so you always know when you last did something — and when it's probably time again."
                                tags={["Swift", "SwiftUI", "iOS"]}
                                githubUrl="https://github.com/Legelid/Last-I-did"
                            />
                        </div>
                        <p className="text-center text-sm text-gray-400 dark:text-gray-600 mt-8">

                        </p>
                    </div>

                    {/* Professional Network Section */}
                    <div className="mt-16 md:mt-24">
                        <p className="text-sm font-bold text-white text-center mb-4">
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
