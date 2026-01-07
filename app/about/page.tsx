"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";
import CompanyCarousel from "../../components/CompanyCarousel";
import HeroImageCarousel from "@/components/HeroImageCarousel";


export default function AboutPage() {
    return (
        <section className="py-40">
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

                        <HeroImageCarousel
                            src="/me.jpg"
                            alt="Andrew Collins"
                            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl"
                        />
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
                    <h1 className="mt-10 text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                        About Me
                    </h1>

                    <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">
                        Hello! I’m <span className="font-bold text-purple-900 dark:text-purple-400">Andrew</span>,
                        a passionate Tech Enthusiast who has a love for technology and coding.
                        I love solving real-world problems, learning new technologies, and continuously improving my craft.
                    </p>

                    {/* Button */}
                    <div className="mt-10">
                        <a
                            href="/projects"
                            className="
                px-10 py-4 rounded-xl
                bg-purple-700 text-white hover:bg-purple-800
                dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500
                text-xl font-semibold shadow-lg transition-all
              "
                        >
                            View My Projects
                        </a>
                    </div>
                    <CompanyCarousel />
                </motion.div>
            </div>
        </section>
    );
}
