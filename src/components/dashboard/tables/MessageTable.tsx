import { TMessage } from "@/components/types";


const MessageTable = ({ message }: { message: TMessage }) => {
    return (
        <tr className="hover:bg-base-200 py-4 px-3">

            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <p className="text-gray-700 dark:text-gray-100">{message.name}</p>
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <p className="text-gray-700 dark:text-gray-100">{message.email}</p>
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <p className="text-gray-700 truncate w-[500px] dark:text-gray-100">{message?.message}</p>
            </td>




        </tr>
    );
};

export default MessageTable;