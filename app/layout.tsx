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
        <body className="min-h-screen flex flex-col bg-transparent text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
