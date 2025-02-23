import BlogCard from '@/components/BlogCard';
import { IBlog } from '@/components/types';
import React from 'react';
export const metadata = {
    title: 'Blogs'
}
const BlogsPage = async () => {
    const res = await fetch(`${process.env.API_URL}/blogs`, { cache: 'no-store' })
    const { data: blogs } = await res.json()

    return (
        <div>

            <div className='grid grid-cols-3 gap-5'>
                {blogs?.map((blog: IBlog) => <BlogCard key={blog?._id} blog={blog} />)}
            </div>
        </div>
    );
};

export default BlogsPage;