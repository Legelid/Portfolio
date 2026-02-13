"use client";

const companies = [
    { name: "Laravel", img: "/logos/Laravel.svg", link: "https://laravel.com/" },
    { name: "Docker", img: "/logos/Docker.svg", link: "https://www.docker.com/" },
    { name: "GitHub", img: "/logos/github.svg", link: "https://github.com/" },
    { name: "Tailwind CSS", img: "/logos/tailwind.svg", link: "https://tailwindcss.com/" },
    { name: "Linux", img: "/logos/Linux.svg" },
    { name: "Grafana", img: "/logos/Grafana.svg", link: "https://www.grafana.com/" },
    { name: "Google", img: "/logos/google.svg", link: "https://www.google.com/" },
];

export default function CompanyCarousel() {
    return (
        <div className="relative overflow-hidden w-full py-6 md:py-10">

            {/* MARQUEE TRACK */}
            <div className="flex gap-6 md:gap-12 animate-marquee md:animate-marquee-desktop whitespace-nowrap">
                {companies.map((c, i) => (
                    <a
                        key={i}
                        href={c.link}
                        target="_blank"
                        className="inline-flex items-center justify-center bg-gray-300 dark:bg-gray-800
                       rounded-xl shadow-md hover:shadow-lg transition-all p-2 md:p-4 min-w-[100px] h-[70px] md:min-w-[150px] md:h-[100px]"
                    >
                        <img src={c.img} alt={c.name} className="h-full object-contain" />
                    </a>
                ))}

                {/* DUPLICATE FOR SEAMLESS LOOP */}
                {companies.map((c, i) => (
                    <a
                        key={`dup-${i}`}
                        href={c.link}
                        target="_blank"
                        className="inline-flex items-center justify-center bg-gray-300 dark:bg-gray-800
                       rounded-xl shadow-md hover:shadow-lg transition-all p-2 md:p-4 min-w-[100px] h-[70px] md:min-w-[150px] md:h-[100px]"
                    >
                        <img src={c.img} alt={c.name} className="h-full object-contain" />
                    </a>
                ))}
            </div>
        </div>
    );
}
