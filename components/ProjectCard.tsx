interface ProjectCardProps {
    title: string;
    description: string;
    href?: string; // Optional link to GitHub, live site, etc.
}

export function ProjectCard({ title, description, href }: ProjectCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {description}
            </p>

            {href && (
                <a
                    href={href}
                    target="_blank"
                    className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                    View Project →
                </a>
            )}
        </div>
    );
}