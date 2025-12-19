import React from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">

                {/* Branding / Logo */}
                <Link
                    href="/"
                    className="font-semibold text-xl tracking-tight text-gray-900 dark:text-gray-100 transition-colors"
                >
                    Andrew Collins
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6 text-sm">

                    <Link
                        href="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        href="/hobbies"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Hobbies
                    </Link>

                    <Link
                        href="/skills"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Skills
                    </Link>

                    <Link
                        href="/history"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
                    >
                        Job History
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
