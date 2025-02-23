import { signOut } from "next-auth/react";
import Link from "next/link";
import { MdHome } from "react-icons/md";


const LogoutButton = () => {
    return (
        <div className="space-y-3">
            <Link
                href={"/"}
                className={`flex items-center gap-3 text-slate-50 rounded px-3 py-2.5
                                              transition-colors hover:bg-indigo-600 `}
            >
                <div className="flex items-center self-center">
                    <MdHome
                        className="h-6 w-6"
                    />
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden font-medium  truncate text-sm">
                    Home
                </div>
            </Link>
            <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="flex hover:bg-indigo-600 text-slate-50 w-full items-center gap-2 rounded px-3 py-2.5  transition-colors  "
            >
                <div className="flex items-center self-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 font-medium overflow-hidden truncate text-sm ">
                    Logout
                </div>
            </button>
        </div>
    );
};

export default LogoutButton;