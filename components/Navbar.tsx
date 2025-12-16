import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b bg-blue-900 border-blue-500">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
                {/* Branding / Logo */}
                <Link href="/" className="font-semibold text-xl tracking-tight">
                    MySite
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6 text-sm">
                    <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
                    <Link href="/hobbies" className="hover:text-blue-700 transition-colors">Hobbies</Link>
                    <Link href="/skills" className="hover:text-blue-700 transition-colors">Skills</Link>
                    <Link href="/history" className="hover:text-blue-700 transition-colors">Job History</Link>
                </div>
            </nav>
        </header>
    );
}
