import { IBlog } from '@/components/types';
import { Calendar } from 'lucide-react';
import React from 'react';

export const generateStaticParams = async () => {

  const blogs = await fetch(`${process.env.API_URL}/blogs`)
  const { data: blogsData } = await blogs.json()
  return blogsData.map((blog: IBlog) => ({ blogId: blog._id }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params
  const res = await fetch(`${process.env.API_URL}/blogs/${blogId}`, { next: { revalidate: 30 } })
  const { data: blog } = await res.json()
  return {
    title: blog?.title,
    description: blog?.description
  }
}
const BlogDeyails = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params
  const res = await fetch(`${process.env.API_URL}/blogs/${blogId}`)
  const { data: blog } = await res.json()
  return (
    <div className="max-w-4xl border border-[#31ffcc] rounded-md text-white mx-auto p-6">
      {/* Blog Header */}
      <header className="mb-4">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-72 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{blog?.title}</h1>
        <div className="flex items-center text-gray-200 mt-2">
          <Calendar className="w-5 h-5 mr-2" />
          <p>{new Date(blog?.createdAt).toLocaleDateString()}</p>
        </div>
      </header>

      {/* Author Info */}
      <section className="flex items-center space-x-4 mb-6">
        <img
          src={blog?.author?.avatar}
          alt={blog?.author?.name}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h3 className="text-lg font-semibold">{blog?.author?.name}</h3>
          <p className="text-sm text-gray-300">{blog?.author?.email}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section>
        <p className="text-gray-300 text-lg leading-relaxed">{blog?.description}</p>
      </section>

      {/* Blog Metadata */}
      <footer className="mt-8">
        <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
          {blog?.category}
        </span>
      </footer>
    </div>
  );
};

export default BlogDeyails;