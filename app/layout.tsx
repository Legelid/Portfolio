import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "Andrew Collins — Full Stack Developer",
    description: "Full stack developer specializing in PHP, Laravel, and JavaScript. Available for hire in Indianapolis, IN and remote.",
    viewport: {
        width: "device-width",
        initialScale: 1,
        viewportFit: "cover",
    },
    openGraph: {
        title: "Andrew Collins — Full Stack Developer",
        description: "Full stack developer specializing in PHP, Laravel, and JavaScript",
        url: "https://www.andrewrobertcollins.com",
        siteName: "Andrew Collins",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Andrew Collins — Full Stack Developer",
        description: "Full stack developer specializing in PHP, Laravel, and JavaScript",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
        <head>
            {/* Browser/status bar theme color - dark blue for dark mode default */}
            <meta name="theme-color" content="#172554" id="theme-color-meta" />
            {/* Apple specific - enables edge-to-edge and dark status bar */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Andrew Collins",
                        jobTitle: "Full Stack Developer",
                        url: "https://www.andrewrobertcollins.com",
                        sameAs: [
                            "https://www.linkedin.com/in/andrew-collins-528117137/",
                            "https://github.com/Legelid",
                        ],
                        knowsAbout: ["PHP", "Laravel", "JavaScript", "React", "Next.js"],
                    }),
                }}
            />
        </head>
        <body className="min-h-screen flex flex-col relative">
        <Analytics />

        {/* THE RIPPLE OVERLAY (animation layer) */}
        <div id="theme-ripple" className="pointer-events-none fixed inset-0 z-[999]"></div>

        {/* BACKGROUND GRADIENT */}
        <div
            className="fixed inset-0 -z-10 bg-gray-50 dark:bg-gray-950"
        />

        {/* PAGE WRAPPER (holds both theme layers) */}
        <div id="theme-wrapper" className="relative w-full h-full flex-grow">

            {/* CURRENT THEME LAYER */}
            <div id="theme-layer" className="absolute inset-0 z-10 flex flex-col">
                <main className="flex-grow">{children}</main>
            </div>

            {/* NEXT THEME LAYER (revealed during ripple animation) */}
            <div
                id="theme-layer-next"
                className="absolute inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300"
            >
                <main className="flex-grow">{children}</main>
            </div>
        </div>

        </body>
        </html>
    );
}