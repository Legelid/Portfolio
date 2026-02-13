"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const devTools = [
    {
        name: "React",
        logo: "/logos/React-icon.svg",
        desc: "Built interactive UIs and component-based front ends"
    },
    {
        name: "Next.js",
        logo: "/logos/nextjs.svg",
        desc: "Primary framework for full stack web apps, including this site"
    },
    {
        name: "TypeScript",
        logo: "/logos/Typescript.svg",
        desc: "Type-safe development across front end and back end projects"
    },
    {
        name: "Tailwind CSS",
        logo: "/logos/tailwind.svg",
        desc: "Utility-first styling for responsive, consistent UI design"
    },
    {
        name: "GitHub",
        logo: "/logos/github.svg",
        desc: "Version control, collaboration, and project management"
    },
    {
        name: "Laravel",
        logo: "/logos/Laravel.svg",
        desc: "Primary back end framework for full stack PHP applications"
    },
    {
        name: "Docker",
        logo: "/logos/Docker.svg",
        desc: "Containerised local dev environments and deployments"
    },
    {
        name: "Linux",
        logo: "/logos/Linux.svg",
        desc: "Daily driver for development and server administration"
    },
];

function SkillGrid({ title, skills }: { title: string; skills: { name: string; logo: string; desc: string }[] }) {
    return (
        <div className="mb-10 md:mb-16 dark:text-white">
            <h2 className="text-2xl md:text-3xl text-center font-semibold mb-6 dark:text-white">{title}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 text-center">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="mb-3 object-contain w-12 h-12 md:w-16 md:h-16"
                        />
                        <span className="text-xs md:text-sm font-medium text-center">{skill.name}</span>
                        <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center leading-snug">
                            {skill.desc}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function SkillsPage() {
    return (
        <section className="mx-auto max-w-6xl py-12 md:py-20 px-4">
            <motion.h1
                className="text-3xl md:text-5xl font-bold mb-6 text-center dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Skills & Tools
            </motion.h1>

            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 md:mb-20 text-sm md:text-base">
                The development tools and technologies I use regularly to build full stack applications.
            </p>


            <SkillGrid title="Development & Tech" skills={devTools} />
        </section>
    );
}
