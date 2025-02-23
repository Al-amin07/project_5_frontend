/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { CreateProjectModal } from '@/components/dashboard/modals/CreateProjectModal';
import ProjectTable from '@/components/dashboard/tables/ProjectTable';
import { IProject } from '@/components/types';
import { useCreateProjectMutation, useGetprojectsQuery } from '@/redux/feature/projects/projectApi';
import TableSkeleton from '@/utils/loading/TableSkeleton';
import { useSession } from 'next-auth/react';
import React, { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

const ProjectsManagement = () => {
    const { data: projects, isLoading, refetch } = useGetprojectsQuery(null)
    // console.log({ projects, isLoading })
    const [createProject, { isLoading: createProjectLoading }] = useCreateProjectMutation()
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false)
    const projectList = useMemo(() => projects?.map((project: IProject) => <ProjectTable key={project?._id} session={session} refetch={refetch} project={project} />), [projects, refetch, session]);

    const handleCreate: SubmitHandler<FieldValues> = async (data) => {

        try {
            const author = {
                name: session?.user?.name,
                email: session?.user?.email,
                avatar: session?.user?.image
            }
            data.author = author
            const result = await createProject(data).unwrap();
            console.log(result)
            if (result.success) {
                toast.success(result?.message || 'Project created successfully', { duration: 2000 })
                refetch()

            }

        } catch (error: any) {
            toast.error(error?.data?.message || 'Failed to create project', { duration: 3000 })
        } finally {
            setIsOpen(false)
        }
    }

    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Projects Management</h1>
                <CreateProjectModal handleCreate={handleCreate} setIsOpen={setIsOpen} isLoading={createProjectLoading} isOpen={isOpen} />
            </div>

            {
                isLoading ? <TableSkeleton /> : <table className="min-w-full shadow-lg divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Project Name
                            </th>

                            <th scope="col" className="px-12 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <button className="flex items-center gap-x-2">
                                    <span>Description</span>


                                </button>
                            </th>

                            <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Live Link
                            </th>

                            <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Developer</th>
                            <th scope="col" className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>




                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {
                            projectList
                        }

                    </tbody>
                </table>
            }
        </div>
    );
};

export default ProjectsManagement;