import { IProject } from '@/components/types';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.API_URL}/projects`)
    const { data: projects } = await res.json()
    return projects.map((project: IProject) => ({ projectId: project?._id }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const res = await fetch(`${process.env.API_URL}/projects/${projectId}`, { next: { revalidate: 30 } })
    const { data: project } = await res.json()
    return {
        title: project?.name,
        description: project?.description
    }
}
const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const res = await fetch(`${process.env.API_URL}/projects/${projectId}`)
    const { data: project } = await res.json()
    console.log(project)
    return (

        <div>
            <div className="flex  flex-col lg:flex-row gap-8 text-white items-center">
                <div className="flex-1 h-[400px]">
                    <Image
                        src={project?.image}
                        alt={project?.name}
                        height={800}
                        width={800}
                        className="w-full h-full max-w-4xl mx-auto rounded-lg"
                    />

                </div>
                <div className='flex-1'>
                    <h1 className="text-2xl md:text-3xl  font-semibold mt-4">{project.name}</h1>
                    <p className="text-base md:text-lg mt-2 mb-6 text-gray-300">{project.description}</p>
                    <div className="flex items-center space-x-4 mb-6">
                        <Image
                            src={project.author.avatar}
                            alt={project.author.name}
                            width={50}
                            height={50}
                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{project.author.name}</h3>
                            <p className="text-gray-200">{project.author.email}</p>
                        </div>
                    </div>

                    <Link href={project.liveUrl}
                        className="relative py-2.5 px-5 border border-[#31ffcc] text-[#31ffcc] overflow-hidden
                       before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#31ffcc]
                       before:transition-all before:duration-500 hover:before:w-full hover:text-black"
                    >
                        <span className="relative z-10 transition-colors duration-500">Live Link</span>
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default ProjectDetailsPage;

