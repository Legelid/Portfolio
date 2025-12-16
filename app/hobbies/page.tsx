"use client";

import { motion } from "framer-motion";
import {FaGamepad, FaDiceD20, FaMusic, FaLaptop, FaMountain, FaYoutubeSquare} from "react-icons/fa";

export default function HobbiesPage() {
    return (
        <section className="mx-auto max-w-5xl py-20">
            {/* Page Header */}
            <motion.h1
                className="text-6xl font-bold tracking-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Hobbies
            </motion.h1>

            <motion.p
                className="mt-4 text-center text-gray-600 max-w-1xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                These are some of the things I love to do outside of coding! They help me relax,
                stay creative, and enjoy life!
            </motion.p>

            {/* Hobby Grid */}
            {/* STACKED HOBBY ROWS */}
            <div className="mt-16 space-y-20">
                <hr className="border-t border-gray-300" />

                {/* VIDEO GAMES — ROW */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Left Box */}
                    <div className="p-10 rounded-xl bg-white text-black shadow border border-gray-200 text-center">
                        <FaGamepad className="text-5xl text-purple-700 mx-auto" />
                        <h2 className="mt-4 text-2xl font-semibold">Video Games</h2>
                    </div>

                    {/* Right Side — List of Games */}
                    <div className="md:col-span-3 space-y-8">

                        {/* GAME 1 */}
                        <div className="flex gap-6 items-center">
                            {/* Placeholder or actual image */}
                            <img
                                src="/games/fnv.jpg"
                                alt="Fallout New Vegas"
                                className="w-150 h-60 rounded-lg object-cover shadow"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">My Favorite Game:</h3>
                                <p className="text-gray-600 text-sm">
                                    Fallout New Vegas: The most incredible open-world RPG series with amazing lore!
                                </p>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* D&D — ROW */}
                <hr className="border-t border-gray-300" />
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="p-9 rounded-xl bg-white text-black shadow border border-gray-200 text-center">
                        <FaDiceD20 className="text-5xl text-purple-700 mx-auto" />
                        <h2 className="mt-4 text-2xl font-semibold">Dungeons & Dragons</h2>
                    </div>

                    {/* Right Side — Placeholder Photo + Text */}
                    <div className="md:col-span-3 flex gap-6 items-start">
                        <img
                            src="/games/bulgan0.png"
                            alt="Bulgan"
                            className="w-180 h-60 rounded-lg object-cover shadow"
                        />
                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                (Placeholder text) Write about your campaigns, character builds, stories,
                                or fun moments here!
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* TECH — ROW */}
                <hr className="border-t border-gray-300" />
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="p-12 rounded-xl text-black bg-white shadow border border-gray-200 text-center">
                        <FaLaptop className="text-5xl text-purple-700 mx-auto" />
                        <h2 className="mt-5 text-2xl font-semibold">Tech</h2>
                    </div>

                    <div className="md:col-span-3 flex gap-6 items-start">
                        <div className="w-140 h-49 rounded-lg bg-gray-200 shadow flex items-center justify-center text-gray-500 text-sm">
                            Image
                        </div>
                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                (Placeholder text) Share your passion for hardware, coding, gadgets, etc.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* MUSIC — ROW */}
                <hr className="border-t border-gray-300" />
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="p-12 rounded-xl bg-white text-black  shadow border border-gray-200 text-center">
                        <FaMusic className="text-5xl text-purple-700 mx-auto" />
                        <h2 className="mt-6 text-2xl font-semibold">Music</h2>
                    </div>

                    <div className="md:col-span-3 flex gap-6 items-start">
                        <img
                            src="/games/spotify.png"
                            alt="Spotify"
                            className="w-300 h-50 rounded-lg object-cover shadow"
                        />
                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                (Placeholder text) Talk about your favorite genres, artists, or playlists.
                            </p>
                        </div>
                    </div>
                </motion.div>
                {/* CAVING — ROW */}
                <hr className="border-t border-gray-300" />
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="p-12 rounded-xl text-black bg-white shadow border border-gray-200 text-center">
                        <FaMountain className="text-5xl text-purple-700 mx-auto" />
                        <h2 className="mt-6 text-2xl font-semibold">Caving</h2>
                    </div>

                    <div className="md:col-span-3 flex gap-6 items-start">
                        <img
                            src="/games/fnv.jpg"
                            alt="caving"
                            className="w-150 h-50 rounded-lg object-cover shadow"
                        />
                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                (Placeholder text) Share your passion caving and other outdoor activities.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <hr className="border-t border-gray-300" />
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="p-10 rounded-xl text-black bg-white shadow border border-gray-200 text-center">
                        <FaYoutubeSquare className="text-5xl text-purple-700 mx-auto" />
                        <h2 className="mt-4 text-2xl font-semibold">Glitch Buddies</h2>
                    </div>
                    <div className="md:col-span-3 flex gap-6 items-start">
                        <img
                            src="/games/glitchbuddies.png"
                            alt="GlitchBuddies"
                            className="w-150 h-55 rounded-lg object-cover shadow"
                        />
                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                Proud creator and partner to the Glitch Buddies Channel!
                            </p>
                        </div>
                    </div>
                </motion.div>
                <hr className="border-t border-gray-300" />
            </div>
        </section>
    );
}