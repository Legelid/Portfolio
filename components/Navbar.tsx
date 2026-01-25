"use client";

import React, { useState } from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/skills", label: "Skills" },
        { href: "/experience", label: "Experience" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <header
                className="
                border-b
                bg-white/80 backdrop-blur
                border-gray-200
                dark:bg-blue-950/80 dark:border-blue-950
                transition-colors
                relative z-50
            "
            >
                <nav className="mx-auto flex max-w-10xl items-center justify-between p-4">

                    {/* Branding / Logo */}
                    <Link href="/" className="flex items-center">
                        <div
                            className=" flex items-center
                            justify-center w-16 h-16 md:w-28 md:h-20 rounded-xl
                            backdrop-blur transition-transform hover:scale-105"
                        >
                            <Image
                                src="/andrewlogo2.png"
                                alt="Andrew Collins Logo"
                                width={80}
                                height={80}
                                priority
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6 text-base">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Hamburger Button - hidden when menu is open */}
                    {!isMenuOpen && (
                        <button
                            onClick={toggleMenu}
                            aria-label="Open menu"
                            className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg
                                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300" />
                            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mt-1.5" />
                            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mt-1.5" />
                        </button>
                    )}
                </nav>
            </header>

            {/* Full-screen Mobile Menu - OUTSIDE header to cover entire page */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] md:hidden
                                   bg-white/75 dark:bg-gray-900/75
                                   backdrop-blur-2xl
                                   flex flex-col"
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={closeMenu}
                                aria-label="Close menu"
                                className="w-11 h-11 flex items-center justify-center rounded-lg
                                           bg-gray-200 dark:bg-gray-700
                                           hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Centered Menu Links */}
                        <div className="flex-1 flex flex-col items-center justify-center space-y-6 px-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="block py-3 px-8 text-2xl font-semibold text-gray-900 dark:text-white
                                                   hover:text-purple-600 dark:hover:text-purple-400
                                                   transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Theme Toggle at Bottom */}
                        <div className="p-6">
                            <div className="flex items-center justify-center gap-4 py-3 px-6
                                            bg-gray-200 dark:bg-gray-700 rounded-xl">
                                <span className="text-gray-800 dark:text-gray-200 font-medium">Theme</span>
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
