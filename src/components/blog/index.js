import React, { useEffect, useState } from 'react';
import BlogCard from '../HomePage/Blog/BlogCard';

const BlogContainer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blog', {})
            .then((res) => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-4xl font-semibold border-b container pb-4 mx-auto'>Our Latest News </h1>
            <div className='bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 max-w-7xl   py-11 container mx-auto flex-wrap px-4'>
                {data.map((dt, i) => <BlogCard key={i} blogdata={dt}></BlogCard>)}


            </div>
        
        </div>
    );
};

export default BlogContainer;