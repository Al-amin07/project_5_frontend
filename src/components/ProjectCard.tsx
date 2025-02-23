import Image from "next/image";
import Link from "next/link";
import { IProject } from "./types";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <div className=" text-white shadow-xl rounded-xl border  overflow-hidden">
            <Image
                src={project?.image}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-52 object-cover "
            />
            <div className="p-6 bg-white">
                <h3 className="text-2xl text-gray-800 font-bold mb-3">{project.name}</h3>

                <p className="text-gray-600 text-sm mt-2 mb-3">
                    {project.description.length > 100
                        ? project.description.slice(0, 90) + "..."
                        : project.description}
                    <Link href={`/projects/${project._id}`} className="text-teal-600 hover:bg-teal-50 py-1 px-2 ml-3">
                        Read More
                    </Link>
                </p>
                <div className="flex justify-between">
                    <Link
                        href={project?.liveUrl}
                        target="_blank"
                        className=" text-blue-500 rounded-lg  text-sm font-medium hover:underline"
                    >
                        Live Demo
                    </Link>
                    {
                        project?.githubClient && <Link
                            href={project?.githubClient as string}
                            target="_blank"
                            className=" text-blue-500 rounded-lg  text-sm font-medium hover:underline"
                        >
                            GitHub Client
                        </Link>
                    }

                    {
                        project?.githubServer && <Link
                            href={project?.githubServer as string}
                            target="_blank"
                            className=" text-blue-500 rounded-lg  text-sm font-medium hover:underline"
                        >
                            GitHub Server
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;