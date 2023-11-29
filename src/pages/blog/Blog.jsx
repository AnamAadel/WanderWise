import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import useBlog from '../../hooks/useBlog';
import BlogCard from './components/BlogCard';

function Blog() {
    const {blogData} = useBlog();
    return (
        <>
            <PageHeader PageName={"Blog"} />
            <section className="dark:bg-gray-800 container max-auto dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link to={`/blog/${blogData[0]?._id}`} rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src={blogData[0]?.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogData[0]?.title}</h3>
                            <span className="text-xs dark:text-gray-400">{blogData[0]?.date}</span>
                            <p>{blogData[0]?.content}</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogData.map((blog, idx)=> (
                        idx !== 0 &&
                        <BlogCard blog={blog} key={blog._id} />

                    ))}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog