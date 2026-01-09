import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-yellow-300 bg-yellow-300 dark:border-black dark:bg-black mt-20 py-10 text-center text-sm text-black dark:text-white ">
            © {new Date().getFullYear()} TheBois. All rights reserved.
            <div className="flex justify-center mt-4">
                <Link
                    href="/hobbies"
                    aria-label="Personal interests"
                    className="
      opacity-40 hover:opacity-100
      transition-opacity
      text-gray-500 dark:text-gray-400
    "
                >
                    <Sparkles size={16} />
                </Link>
            </div>
        </footer>
    );
}