import Link from "next/link";

interface HomepageProjectCardProps {
    title: string;
    tagline: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export default function HomepageProjectCard({ title, tagline, description, tags, githubUrl, demoUrl }: HomepageProjectCardProps) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tagline}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 mt-auto pt-2">
                {githubUrl && (
                    <Link href={githubUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-purple-700 dark:text-yellow-400 hover:underline underline-offset-4 transition-colors">
                        View on GitHub →
                    </Link>
                )}
                {demoUrl && (
                    <Link href={demoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-purple-700 dark:text-yellow-400 hover:underline underline-offset-4 transition-colors">
                        Live Demo →
                    </Link>
                )}
            </div>
        </div>
    );
}
