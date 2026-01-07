"use client";

const companies = [
    { name: "PowerSchool", img: "/logos/powerschool.svg", link: "https://www.powerschool.com/" },
    { name: "Google", img: "/logos/google.svg", link: "https://www.google.com/" },
    { name: "Rhombus", img: "/logos/rhombus.jpeg", link: "https://www.rhombussystems.com/" },
    { name: "Ubiquiti", img: "/logos/ubiquiti.svg", link: "https://ui.com/" },
    { name: "Proxmox", img: "/logos/proxmox.svg", link: "https://www.proxmox.com/" },
];

export default function CompanyCarousel() {
    return (
        <div className="relative overflow-hidden w-full py-10">

            {/* MARQUEE TRACK */}
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {companies.map((c, i) => (
                    <a
                        key={i}
                        href={c.link}
                        target="_blank"
                        className="inline-flex items-center justify-center bg-white dark:bg-gray-800
                       rounded-xl shadow-md hover:shadow-lg transition-all p-4 min-w-[150px] h-[100px]"
                    >
                        <img src={c.img} alt={c.name} className="h-full object-contain rounded-xl" />
                    </a>
                ))}

                {/* DUPLICATE FOR SEAMLESS LOOP */}
                {companies.map((c, i) => (
                    <a
                        key={`dup-${i}`}
                        href={c.link}
                        target="_blank"
                        className="inline-flex items-center justify-center bg-white dark:bg-gray-800
                       rounded-xl shadow-md hover:shadow-lg transition-all p-4 min-w-[150px] h-[100px]"
                    >
                        <img src={c.img} alt={c.name} className="h-full object-contain rounded-xl" />
                    </a>
                ))}
            </div>
        </div>
    );
}