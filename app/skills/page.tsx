"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dailyTools = [
    { name: "Google Workspace", logo: "/logos/google.svg" },
    { name: "PowerSchool", logo: "/logos/powerschool.svg" },
    { name: "Jamf", logo: "/logos/jamf.svg" },
    { name: "Proxmox", logo: "/logos/proxmox.svg" },
    { name: "Ubiquiti", logo: "/logos/ubiquiti.svg" },
    { name: "Grafana", logo: "/logos/Grafana.svg" },
    { name: "Rhombus", logo: "/logos/rhombus.jpeg" },
    { name: "ChatGPT", logo: "/logos/Chatgpt.svg" },
];

const devTools = [
    { name: "React", logo: "/logos/React-icon.svg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "TypeScript", logo: "/logos/Typescript.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
    { name: "GitHub", logo: "/logos/github.svg"},
    { name: "Laravel", logo: "/logos/Laravel.svg" },
    { name: "Docker", logo: "/logos/Docker.svg" },
    { name: "Linux", logo: "/logos/Linux.svg" },
];

function SkillGrid({ title, skills }: { title: string; skills: { name: string; logo: string }[] }) {
    return (
        <div className="mb-16 dark:text-white">
            <h2 className="text-3xl text-center font-semibold mb-6 dark:text-white">{title}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="mb-3 object-contain"
                        />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function SkillsPage() {
    return (
        <section className="mx-auto max-w-6xl py-20 px-4">
            <motion.h1
                className="text-5xl font-bold mb-6 text-center dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Skills & Tools
            </motion.h1>

            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-20">
                These are the tools, platforms, and technologies I use regularly and feel confident working with in real-world environments.
            </p>


            <SkillGrid title="Development & Tech" skills={devTools} />
            <SkillGrid title="Daily Tools & Platforms" skills={dailyTools} />
        </section>
    );
}