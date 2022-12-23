import React, { useEffect, useState } from 'react';
import BlogCard from '../HomePage/Blog/BlogCard';
import BlogPageAside from './Components/Aside';

const BlogContainer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://oasis-backend.onrender.com/api/v1/blogs?limit=5', {})
            .then((res) => res.json())
            .then(data => {
                setData(data.data)
            })
    }, [])
    return (
        <div className='min-h-screen max-w-screen-2xl mx-auto'>
           <div className='grid grid-cols-[70%_30%]'>
           <div className='bg-gray-200  py-11  mx-auto px-4 w-full'>
            <div className='max-w-[800px] mx-auto'>
            <h1 className='text-center text-4xl font-semibold container pb-4 mx-auto'>Latest Blogs </h1>
                {data && data.map((dt, i) => <BlogCard key={i} blogdata={dt}></BlogCard>)}
            </div>
            </div>
            <BlogPageAside/>
           </div>
        
        </div>
    );
};

export default BlogContainer;