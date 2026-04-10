"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcons } from "@/components/SocialIcons";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ProjectCard } from "@/components/ProjectCard";

const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 } as const,
    transition: { duration: 0.6, ease: "easeOut" } as const,
};

export default function AboutPage() {
    return (
        <div className="bg-gray-50 dark:bg-gray-950">

            {/* Floating UI */}
            <SocialIcons />
            <DarkModeToggle />

            {/* ── HERO ── */}
            <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl">

                    {/* Layered name effect */}
                    <div className="relative mb-8">
                        {/* Background — "COLLINS" massive + semi-transparent */}
                        <h1 className="text-[10rem] md:text-[18rem] lg:text-[21rem] font-bold text-gray-900 dark:text-white opacity-20 leading-none uppercase tracking-tight select-none">
                            Collins
                        </h1>
                        {/* Foreground — "Andrew" anchored to bottom-left of "COLLINS" */}
                        <div className="absolute bottom-0 left-0 md:left-12 lg:left-16">
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white leading-none">
                                Andrew
                            </h2>
                        </div>
                    </div>

                    <p className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6">
                        Full Stack Developer · PHP / Laravel / JavaScript
                    </p>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-500">
                        Available for hire — Indianapolis, IN · Open to remote
                    </p>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <motion.section
                {...fadeUp}
                className="py-24 md:py-32 bg-gray-50 dark:bg-gray-950 px-6"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                        About
                    </h2>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        I build full-stack web applications and understand the infrastructure
                        they run on. I started in IT managing systems for 500+ users, then
                        learned to code — so I know both sides of the stack.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Tech I Use
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {["PHP", "Laravel", "JavaScript", "React", "Next.js", "Docker", "MySQL", "Tailwind CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="font-semibold text-gray-900 dark:text-white">Currently:</span>{" "}
                        Looking for a full-stack or backend role where I can build tools that solve real problems.
                    </p>
                </div>
            </motion.section>

            {/* ── PROJECTS ── */}
            <motion.section
                {...fadeUp}
                viewport={{ once: false, amount: 0.2 }}
                className="py-24 md:py-32 bg-gray-50 dark:bg-gray-950 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        What I've Built
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="PTO Management System"
                            description="Full-stack leave tracking for workplace teams"
                            image="/projects/pto-system.png"
                            techStack={["PHP", "Laravel", "Filament", "MySQL", "Tailwind CSS"]}
                            problem="Managing employee time-off manually meant spreadsheets, missed requests, and zero visibility into team availability. Managers had no way to see who was out when, and employees had no confirmation their requests were received."
                            solution="I built a full-stack leave management system that handles the entire workflow — request submission, manager approval, balance tracking, and reporting — in one place. Employees submit requests through a clean UI, managers approve with one click, and everyone can see team availability at a glance."
                            technicalDecisions={[
                                "Laravel + Filament for rapid admin panel development",
                                "MySQL for relational data (employees, requests, balances)",
                                "Livewire for reactive UI without heavy JavaScript overhead",
                                "Tailwind CSS for consistent, maintainable styling",
                            ]}
                            outcome="Deployed internally at Nettle Creek School Corporation for 50+ staff members. Reduced PTO approval time from 2–3 days to same-day. Eliminated spreadsheet errors and gave managers real-time visibility into team availability."
                            githubUrl="https://github.com/Legelid/PTO-Management"
                        />
                        <ProjectCard
                            title="Waypoint Recall"
                            description="iOS activity tracker built in SwiftUI"
                            image="/projects/last-i-did-1.png"
                            techStack={["Swift", "SwiftUI", "iOS"]}
                            problem="'When did I last change the car oil?' or 'How long since I called my mom?' We all have recurring tasks that don't have strict deadlines, but we still need to track them. Most todo apps are overkill for this — they're designed for projects, not simple tracking."
                            solution="Waypoint Recall is a lightweight iOS app for logging recurring personal tasks. You always know when you last did something and when it's probably time again. Simple, focused, and built natively for iOS."
                            technicalDecisions={[
                                "SwiftUI for modern, declarative iOS UI development",
                                "CoreData for local persistence (no cloud dependencies)",
                                "Native iOS patterns for a familiar user experience",
                            ]}
                            outcome="Shipped as an open-source project demonstrating mobile development skills beyond web. Built to solve a real personal problem, not just as a portfolio piece."
                            githubUrl="https://github.com/Legelid/Last-I-did"
                        />
                    </div>
                </div>
            </motion.section>

            {/* ── CONTACT / FOOTER ── */}
            <motion.section
                {...fadeUp}
                className="py-24 bg-gray-50 dark:bg-gray-950 px-6 md:px-12 lg:px-24"
            >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Let's Work Together
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        Looking for a full-stack or backend developer? I'm available for
                        full-time roles and freelance projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:andrewrcollins@live.com"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors font-medium text-lg"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andrew-collins-528117137/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors font-medium text-lg"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="/resume/Andrew_Collins_Resume.pdf"
                            download="Andrew_Collins_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors font-medium text-lg"
                        >
                            Resume
                        </a>
                    </div>

                    <div className="pt-12 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center gap-4">
                        <Image
                            src="/andrewlogo2.png"
                            alt="Andrew Collins"
                            width={56}
                            height={56}
                            className="opacity-60"
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            © 2026 Andrew Collins
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-600">
                            Built with Next.js and Tailwind CSS
                        </p>
                    </div>
                </div>
            </motion.section>

        </div>
    );
}
