import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <section className="mx-auto max-w-5xl py-10 md:py-16 px-4 md:px-0 dark:text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                A selection of the work I've done, showcasing my skills, creativity, and problem-solving ability.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center dark:text-white">
                <ProjectCard
                    title="PTO Management System"
                    description="Managing employee time-off manually means spreadsheets, missed requests, and no visibility into team availability. I built a full stack system that handles the entire workflow — request submission, manager approval, balance tracking, and reporting — in one place."
                    techStack={["PHP", "Laravel", "Filament", "MySQL", "Tailwind CSS"]}
                    image="/projects/pto-system.png"
                />

                <ProjectCard
                    title="Last I Did"
                    description="'When did I last change the car oil?' or 'How long since I called my mom?' are questions with no easy answer. Last I Did is a lightweight iOS app for logging recurring personal tasks so you always know when you last did something - and when it's probably time to do it again."
                    techStack={["Swift", "SwiftUI", "iOS", "Core Data"]}
                    images={[
                        "/projects/first-i-did/screenshot-1.png",
                        "/projects/first-i-did/screenshot-2.png",
                        "/projects/first-i-did/screenshot-3.png",
                        "/projects/first-i-did/screenshot-4.png",
                        "/projects/first-i-did/screenshot-5.png",
                        "/projects/first-i-did/screenshot-6.png",
                    ]}
                />

                <ProjectCard
                    title="NCSC Asset Manager"
                    description="Asset Manager project for Nettle Creek Community Schools. With account creation and login abilities."
                    techStack={["PHP", "MySQL", "Bootstrap"]}
                    image="/projects/Asset1.png"
                />

                <ProjectCard
                    title="UniFi Analytics Dashboard"
                    description="Project my employer at NCSC asked to be created to manage data analytics in one place for their network and tools. *Parts of the image are blurred due to privacy."
                    techStack={["Grafana", "Docker", "Prometheus"]}
                    image="/projects/Grafana1.jpeg"
                />
            </div>
        </section>
    );
}
