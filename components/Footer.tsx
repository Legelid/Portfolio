import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50 dark:border-gray-900 dark:bg-gray-950 py-6 text-center text-sm text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Andrew Collins. All rights reserved.
            <div className="flex justify-center  mt-4">
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