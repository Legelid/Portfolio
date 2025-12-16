import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <section className="mx-auto max-w-5xl py-16">
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                A selection of the work I’ve done, showcasing my skills, creativity, and problem-solving ability.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* These cards will show your projects */}
                <ProjectCard
                    title="Project Title"
                    description="A short description of what this project does."
                />
                <ProjectCard
                    title="Another Project"
                    description="Add as many projects as you'd like using this reusable component."
                />
            </div>
        </section>
    );
}