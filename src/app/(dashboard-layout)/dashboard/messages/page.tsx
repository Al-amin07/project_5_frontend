"use client"
import MessageTable from '@/components/dashboard/tables/MessageTable';
import { TMessage } from '@/components/types';
import { Button } from '@/components/ui/button';
import { useGetAllMessageQuery } from '@/redux/feature/messages/messageApi';
import TableSkeleton from '@/utils/loading/TableSkeleton';
import Link from 'next/link';
import React from 'react';

const Messages = () => {
    const { data: messages, isLoading } = useGetAllMessageQuery(null);
    console.log(messages)
    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white ">Message Management</h1>
                <Link href={'/contact'}><Button variant={'outline'}>Create Message</Button></Link>
            </div>
            {
                isLoading ? <TableSkeleton /> :
                    <table className="min-w-full shadow-lg divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                    Name

                                </th>
                                <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">


                                    Email

                                </th>
                                <th scope="col" className="py-3.5 px-4 text-base font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                            {
                                messages?.map((message: TMessage) => <MessageTable key={message?._id} message={message} />)
                            }
                        </tbody>

                    </table>
            }
        </div>
    );
};

export default Messages;