"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
    }, []);

    const animateThemeChange = (event: any) => {
        const newTheme = theme === "light" ? "dark" : "light";

        const ripple = document.getElementById("theme-ripple");
        const nextLayer = document.getElementById("theme-layer-next");
        const currentLayer = document.getElementById("theme-layer");

        if (!ripple || !nextLayer || !currentLayer) return;

        // Dim old layer slightly (smoothens the theme switch)
        currentLayer.style.transition = "filter 0.4s ease";
        currentLayer.style.filter = "brightness(0.65) blur(1px)";

        // Show new theme layer
        nextLayer.style.opacity = "1";

        // Get button center
        const rect = event.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        ripple.innerHTML = "";

        /* -----------------------------------
            MAIN RIPPLE (color reveal)
        ----------------------------------- */
        const circle = document.createElement("div");
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        Object.assign(circle.style, {
            left: `${x}px`,
            top: `${y}px`,
            width: "0px",
            height: "0px",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            borderRadius: "50%",
            background: newTheme === "dark" ? "#111" : "#eee",
            mixBlendMode: "difference",
            opacity: "1",
            boxShadow: "0 0 60px 20px rgba(255,255,255,0.25)",
            transition:
                "width 0.55s ease-out, height 0.55s ease-out, opacity 0.35s ease-out",
        });

        ripple.appendChild(circle);

        /* -----------------------------------
            DISTORTION RIPPLE (whoosh blur)
        ----------------------------------- */
        const distortion = document.createElement("div");
        distortion.classList.add("distortion");
        Object.assign(distortion.style, {
            left: `${x}px`,
            top: `${y}px`,
            width: "0px",
            height: "0px",
            transform: "translate(-50%, -50%)",
            background: newTheme === "dark" ? "#fff" : "#000",
            transition:
                "width 0.6s ease-out, height 0.6s ease-out, opacity 0.4s ease-out",
        });

        ripple.appendChild(distortion);

        // Begin expansion
        requestAnimationFrame(() => {
            circle.style.width = "4500px";
            circle.style.height = "4500px";

            distortion.style.width = "4400px";
            distortion.style.height = "4400px";
        });

        // Add shockwave pulse
        setTimeout(() => {
            circle.style.transition =
                "width 0.45s ease-in, height 0.45s ease-in, opacity 0.35s ease-in";
            circle.style.width = "4200px";
            circle.style.height = "4200px";
            circle.style.opacity = "0.65";

            distortion.style.opacity = "0.25";
        }, 550);

        // Switch theme AFTER ripple covers content (perfectly smooth)
        setTimeout(() => {
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            localStorage.setItem("theme", newTheme);
            setTheme(newTheme);
        }, 600);

        // Fade out ripples + restore content clarity
        setTimeout(() => {
            circle.style.opacity = "0";
            distortion.style.opacity = "0";
            currentLayer.style.filter = "none";
        }, 900);

        // Cleanup
        setTimeout(() => {
            document.body.style.overflow = "";
            document.body.style.height = "";
            ripple.innerHTML = "";
            nextLayer.style.opacity = "0";
        }, 1100);
    };

    return (
        <button
            onClick={animateThemeChange}
            className="p-2 text-xl rounded-lg bg-gray-300 dark:bg-white/20 transition-colors relative z-[1001]"
        >
            {theme === "dark" ? (
                <FaSun className="text-yellow-300" />
            ) : (
                <FaMoon className="text-black" />
            )}
        </button>
    );
}