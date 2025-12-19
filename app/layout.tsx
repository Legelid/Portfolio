import "./globals.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
    title: "My Portfolio",
    description: "My personal site built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col relative">

        {/* THE RIPPLE OVERLAY (animation layer) */}
        <div id="theme-ripple" className="pointer-events-none fixed inset-0 z-[999]"></div>

        {/* BACKGROUND GRADIENT */}
        <div
            className="fixed inset-0 -z-10 bg-gradient-to-b from-white to-yellow-300
                               dark:bg-gradient-to-b dark:from-blue-950 dark:to-black"
        />

        {/* PAGE WRAPPER (holds both theme layers) */}
        <div id="theme-wrapper" className="relative w-full h-full flex-grow">

            {/* CURRENT THEME LAYER */}
            <div id="theme-layer" className="absolute inset-0 z-10 flex flex-col">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>

            {/* NEXT THEME LAYER (revealed during ripple animation) */}
            <div
                id="theme-layer-next"
                className="absolute inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300"
            >
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </div>

        </body>
        </html>
    );
}