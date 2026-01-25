"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
    return (
        <section className="mx-auto max-w-4xl py-12 md:py-20 px-4">

            {/* Page Header */}
            <motion.h1
                className="text-3xl md:text-5xl font-bold tracking-tight text-center dark:text-white text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Me
            </motion.h1>

            <motion.p
                className="mt-4 text-center dark:text-white text-black max-w-2xl mx-auto text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                I'm always open to new opportunities, collaborations, or even a friendly chat.
                Feel free to reach out through any of the methods below.
            </motion.p>

            {/* Contact Info Section */}
            <div className="mt-8 md:mt-12 space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg">

                {/* Email */}
                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-purple-700 text-2xl md:text-3xl flex-shrink-0" />
                    <a
                        href="mailto:andrewcollins0910@gmail.com"
                        className="hover:text-purple-800 transition-colors dark:text-white text-black break-all"
                    >
                        andrewcollins0910@gmail.com
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                    <FaLinkedin className="text-purple-700 text-2xl md:text-3xl flex-shrink-0" />
                    <a
                        href="https://www.linkedin.com/in/andrew-collins-528117137/"
                        target="_blank"
                        className="hover:text-purple-800 transition-colors dark:text-white text-black break-all"
                    >
                        linkedin.com/in/AndrewCollins
                    </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                    <FaGithub className="text-purple-700 text-2xl md:text-3xl flex-shrink-0" />
                    <a
                        href="https://github.com/Legelid"
                        target="_blank"
                        className="hover:text-purple-800 transition-colors dark:text-white text-black break-all"
                    >
                        github.com/Legelid
                    </a>
                </div>

            </div>
        </section>
    );
}
