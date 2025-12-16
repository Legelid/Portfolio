"use client";
import { motion } from "framer-motion";
import {FaGithub, FaLinkedin, FaEnvelope, FaDiscord} from "react-icons/fa";
export default function AboutPage() {
    return (
        <section className="relative overflow-hidden py-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-400 to-green-700 opacity-20" />

            <div className="mx-auto max-w-5xl">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div
                    className="flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 rounded-full bg-white opacity-50 blur-3xl" />

                        {/* Profile Image */}
                        <img
                            src="/me.jpg"
                            alt="Andrew Collins"
                            className="relative w-48 h-48 rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Social Icons Under Photo */}
                    <div className="mt-4 flex gap-4">
                        <a
                            href="https://github.com/Legelid"
                            target="_blank"
                            className="text-gray-700 hover:text-purple-700 transition-colors text-2xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://discord.gg/Wqnkpg6gSr"
                            target="_blank"
                            className="text-gray-700 hover:text-purple-700 transition-colors text-2xl"
                        >
                            <FaDiscord/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/andrew-collins-528117137/"
                            target="_blank"
                            className="text-gray-700 hover:text-purple-700 transition-colors text-2xl"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:andrewcollins0910@gmail.com"
                            className="text-gray-700 hover:text-purple-700 transition-colors text-2xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column — Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight">About Me</h1>

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        Hello! I’m <span className="font-semibold">Andrew</span>, a passionate developer
                        focused on building clean, modern, and meaningful digital experiences.
                        I love solving real-world problems, learning new technologies,
                        and continuously improving my craft.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        My interests include full-stack development, design systems, UI/UX
                        principles, and creating tools that make people’s lives easier.
                        Outside of coding, I enjoy Video Games, D&D, and exploring new ways to
                        make life fun!
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/projects"
                            className="px-6 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors shadow"
                        >
                            View My Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-300 font-medium hover:bg-gray-100 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Skills Section */}
            <h2 className="mt-20 text-2xl font-semibold tracking-tight">Skills & Technologies</h2>

            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-600 text-sm">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Git & GitHub</li>
                <li>REST APIs</li>
            </ul>

            {/* Contact Section */}
            <h2
                id="contact"
                className="mt-20 text-2xl font-semibold tracking-tight"
            >
                Contact Me
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
                I’m always open to new opportunities, collaborations, or just a friendly
                conversation. Feel free to reach out using the methods below:
            </p>

            <div className="mt-6 space-y-2 text-gray-600">
                <p>
                    📧 <span className="font-medium">Email:</span>
                    <a
                        href="mailto:andrewcollins0910@gmail.com"
                        className="text-purple-800 hover:text-purple-700 ml-1"
                    >
                        andrewcollins0910@gmail.com
                    </a>
                </p>

                <p>
                    💼 <span className="font-medium">LinkedIn:</span>
                    <a
                        href="https://www.linkedin.com/in/andrew-collins-528117137/"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700 ml-1"
                    >
                        linkedin.com/in/AndrewCollins
                    </a>
                </p>

                <p>
                    🧑‍💻 <span className="font-medium">GitHub:</span>
                    <a
                        href="https://github.com/Legelid"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700 ml-1"
                    >
                        github.com/Legelid
                    </a>
                </p>
            </div>
            </div>
        </section>
    );
}
