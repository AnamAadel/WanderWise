import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({blog}) {
    return (
        <Link to={`/blog/${blog._id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.image} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                <span className="text-xs dark:text-gray-400">{blog.date}</span>

                <p>{blog.content}</p>
            </div>
        </Link>
    )
}

export default BlogCard