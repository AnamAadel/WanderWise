import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogHeader from './components/BlogHeader';

function BlogDetails() {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <BlogHeader blog={data} />
    )
}

export default BlogDetails