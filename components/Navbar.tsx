import React from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
    return (
        <header
            className="
            border-b
            bg-white/80 backdrop-blur
            border-gray-200
            dark:bg-blue-950/80 dark:border-blue-950
            transition-colors
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

                {/* Navigation Links */}
                <div className="flex items-center gap-6 text-base">

                    <Link
                        href="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        href="/skills"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Skills
                    </Link>

                    <Link
                        href="/experience"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Experience
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Contact
                    </Link>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
