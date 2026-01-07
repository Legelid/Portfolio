import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <section className="mx-auto max-w-5xl py-16 dark:text-white text-center">
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                A selection of the work I’ve done, showcasing my skills, creativity, and problem-solving ability.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center dark:text-white">
                <ProjectCard
                    title="NCSC Asset Manager"
                    description="Asset Manager project for Nettle Creek Community Schools. With account creation and login abilities."
                    image="/projects/Asset1.png"
                />

                <ProjectCard
                    title="UniFi Analytics Dashboard"
                    description="Project my employer at NCSC asked to be created to manage data analytics in one place for their network and tools. *Parts of the image are blurred due to privacy."
                    image="/projects/Grafana1.jpeg"
                />
            </div>
        </section>
    );
}