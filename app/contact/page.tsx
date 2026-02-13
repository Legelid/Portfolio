"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    return (
        <section className="mx-auto max-w-3xl py-20 md:py-40 px-4">
            <motion.div
                className="flex flex-col items-center text-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Let's Work Together
                </h1>

                {/* Subtext */}
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
                    I'm currently looking for full stack developer roles with a focus
                    on PHP and Laravel. Open to full-time positions and contract work,
                    remote or in the Indianapolis, IN area.
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
                    The best way to reach me:
                </p>

                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/andrew-collins-528117137/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl
                                   bg-purple-700 text-white hover:bg-purple-800
                                   dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500
                                   font-semibold text-base shadow-lg transition-all"
                    >
                        <FaLinkedin className="text-xl" />
                        Connect on LinkedIn
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:andrewcollins0910@gmail.com"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl
                                   border-2 border-purple-700 text-purple-700 hover:bg-purple-50
                                   dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400/10
                                   font-semibold text-base transition-all"
                    >
                        <FaEnvelope className="text-xl" />
                        andrewcollins0910@gmail.com
                    </a>
                </div>

                {/* Response time */}
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    I respond within 24 hours.
                </p>

            </motion.div>
        </section>
    );
}
