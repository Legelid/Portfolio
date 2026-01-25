"use client";

import { motion } from "framer-motion";

export default function ExperiencePage() {
    return (
        <section className="mx-auto max-w-4xl py-12 md:py-20 px-4">

            {/* Header */}
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-center mb-6 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h1>

            <motion.p
                className="text-center text-gray-600 dark:text-gray-300 mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                A timeline of my professional and technical experience.
            </motion.p>

            {/* Timeline */}
            <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 md:pl-8 space-y-10 md:space-y-16">

                {/* EXPERIENCE ITEM */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-purple-600"></div>

                    <h2 className="text-xl md:text-2xl font-semibold dark:text-white">
                        IT Support Technician – Nettle Creek School District
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        December 2021 – Present
                    </p>

                    <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                        <li>Provided technical support for staff and students across multiple systems.</li>
                        <li>Managed user accounts, devices, and permissions.</li>
                        <li>Worked with networking, hardware, and cloud-based tools.</li>
                        <li>Improved troubleshooting workflows and documentation.</li>
                    </ul>

                    <p className="mt-3 text-xs md:text-sm text-gray-500">
                        <strong>Tech:</strong> Google Workspace, ASM, PowerSchool, JAMF, Ubiquiti, ProxMox, Linux, Grafana, Docker
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-purple-600"></div>

                    <h2 className="text-xl md:text-2xl font-semibold dark:text-white">
                        Consultation Agent - Geek Squad / Best Buy
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        July 2018 – December 2021
                    </p>

                    <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                        <li>Provided technical support for clients who come into the store.</li>
                        <li>Diagnose and troubleshoot problems that client provide.</li>
                        <li>Worked with repair team to get client devices fixed.</li>
                        <li>Worked inside Apple repair software and Windows repair tools.</li>
                    </ul>

                    <p className="mt-3 text-xs md:text-sm text-gray-500">
                        <strong>Tech:</strong> Apple Repair Assistant, BestBuy Queue Software, Acronis True Image
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
