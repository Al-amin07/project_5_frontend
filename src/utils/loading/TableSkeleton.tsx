import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const TableSkeleton = () => {
    return (

        <div className="w-full overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">

                        <th className="p-4 text-left">
                            <Skeleton className="h-4 w-24" />
                        </th>
                        <th className="p-4 text-left">
                            <Skeleton className="h-4 w-24" />
                        </th>
                        <th className="p-4 text-left">
                            <Skeleton className="h-4 w-24" />
                        </th>
                        <th className="p-4 text-left">
                            <Skeleton className="h-4 w-24" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-4">
                                <Skeleton className="h-4 w-32" />
                            </td>
                            <td className="p-4">
                                <Skeleton className="h-4 w-40" />
                            </td>
                            <td className="p-4">
                                <Skeleton className="h-4 w-20" />
                            </td>
                            <td className="p-4">
                                <Skeleton className="h-4 w-20" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSkeleton;