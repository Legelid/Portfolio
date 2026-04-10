"use client";

import ThemeToggle from "./ThemeToggle";

export function DarkModeToggle() {
    return (
        <div className="fixed top-4 left-4 z-[1001]">
            <ThemeToggle />
        </div>
    );
}
