import React from "react";
import { IBlog } from "./types";
import Image from "next/image";

import Link from "next/link";

import { Calendar } from "lucide-react";

const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (

        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <figure>
                <img
                    // src={"https://cdn-icons-png.flaticon.com/512/219/219986.png"}
                    src={blog?.image}
                    width={600}
                    height={100}
                    alt="blog image"
                    className="rounded-t-lg h-60 object-cover"
                />
            </figure>
            <div className="px-6 py-4">
                <div className="flex items-center text-gray-800">
                    <Calendar className="w-5 h-5 mr-2" />
                    <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                </div>
                <h2 className="text-xl font-bold mt-4">
                    {blog?.title.length > 30
                        ? blog.title.slice(0, 30) + "..."
                        : blog.title}
                </h2>
                <p className="text-gray-700 mt-2">
                    {blog?.description.length > 100
                        ? blog.description.slice(0, 60) + "..."
                        : blog.description}
                    <Link href={`/blogs/${blog._id}`} className="text-teal-600 ml-2">
                        read more
                    </Link>
                </p>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image
                                src={blog?.author?.avatar}
                                // src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                                width={100}
                                height={100}
                                alt="author image"
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-500">
                            {blog?.author?.name}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogCard




