
/**
 * Modules
 */
import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({
    title,
    tags,
    projectLink,
    repoName,
    classes
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchReadme = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.github.com/repos/itzKieuMinh05/${repoName}/readme`,
                {
                    headers: {
                        'Accept': 'application/vnd.github.v3.raw',
                    },
                }
            );
            if (response.ok) {
                const content = await response.text();
                setDescription(content);
            } else {
                setDescription("No README found for this project.");
            }
        } catch (error) {
            setDescription("Could not load README. Check the GitHub repository directly.");
        } finally {
            setIsLoading(false);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors cursor-pointer" + classes} onClick={fetchReadme}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between gap-4 flex-1">
                        <div>
                            <h3 className="title-1 mb-3">
                                {title}
                            </h3>

                            <div className="flex flex-wrap items-center gap-2">
                                {tags.map((label, key) =>(
                                    <span 
                                    key={key}
                                    className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                            <span className="material-symbols-rounded" aria-hidden="true">
                                Description
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <a 
                            href={projectLink} 
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 text-center px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm transition-colors"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-white">{title}</h2>
                            <button 
                                onClick={closeModal}
                                className="text-zinc-400 hover:text-white text-2xl"
                            >
                                ✕
                            </button>
                        </div>
                        
                        {isLoading ? (
                            <div className="text-zinc-400">Loading README...</div>
                        ) : (
                            <div className="text-zinc-300 prose prose-invert max-w-none text-sm whitespace-pre-wrap break-words">
                                {description}
                            </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-zinc-700">
                            <a 
                                href={projectLink}
                                target="_blank"
                                className="inline-block px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                            >
                                Visit GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard;