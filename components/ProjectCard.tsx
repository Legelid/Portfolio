"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    problem: string;
    solution: string;
    technicalDecisions: string[];
    outcome: string;
    githubUrl?: string;
    liveUrl?: string;
}

export function ProjectCard({
    title,
    description,
    image,
    techStack,
    problem,
    solution,
    technicalDecisions,
    outcome,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Expand / Collapse toggle */}
                <button
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 text-sm hover:underline"
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                >
                    {isExpanded ? "Show less" : "Learn more"}
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-6">

                                <div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">The Problem</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{problem}</p>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">The Solution</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{solution}</p>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Technical Decisions</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                        {technicalDecisions.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Outcome</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{outcome}</p>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {githubUrl && (
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors font-medium text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View Code
                                        </a>
                                    )}
                                    {liveUrl && (
                                        <a
                                            href={liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-400/10 transition-colors font-medium text-sm"
                                        >
                                            View Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
