"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
    const contactCards = [
        {
            icon: FaLinkedin,
            linkText: "Message me on LinkedIn",
            href: "https://www.linkedin.com/in/andrew-collins-528117137/",
            isPrimary: true,
        },
        {
            icon: FaEnvelope,
            linkText: "Send an email",
            href: "mailto:andrewcollins0910@gmail.com",
            isPrimary: false,
        },
        {
            icon: FaGithub,
            linkText: "View GitHub",
            href: "https://github.com/Legelid",
            isPrimary: false,
        },
    ];

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
                className="mt-4 text-center dark:text-gray-300 text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                I'm open to opportunities, roles, and professional conversations. The best ways to reach me are below.
            </motion.p>

            {/* Contact Cards */}
            <motion.div
                className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {contactCards.map((card, index) => (
                    <a
                        key={index}
                        href={card.href}
                        target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={card.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className={`
                            group flex flex-col items-center text-center p-6 rounded-xl
                            border transition-all duration-300
                            ${card.isPrimary
                                ? "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700/50 hover:border-purple-400 dark:hover:border-purple-500"
                                : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600"
                            }
                            hover:shadow-lg hover:-translate-y-1
                        `}
                    >
                        <card.icon
                            className={`text-4xl mb-4 transition-colors ${
                                card.isPrimary
                                    ? "text-purple-600 dark:text-purple-400"
                                    : "text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400"
                            }`}
                        />
                        <span
                            className={`font-medium transition-colors ${
                                card.isPrimary
                                    ? "text-purple-700 dark:text-purple-300"
                                    : "text-gray-700 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-purple-300"
                            }`}
                        >
                            {card.linkText}
                        </span>
                    </a>
                ))}
            </motion.div>

            {/* What I'm Open To Section */}
            <motion.div
                className="mt-12 md:mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
                    What I'm Open To
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    Currently open to: Junior Developer roles · IT / Systems roles · Hybrid positions.
                </p>
            </motion.div>
        </section>
    );
}
