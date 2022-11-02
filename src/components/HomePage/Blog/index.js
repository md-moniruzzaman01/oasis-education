import React from 'react';
import BlogCard from './BlogCard';

const BlogSeactionOfHomePage = ({posts}) => {
    return (
        <>
        <h1 className='text-center text-4xl font-semibold border-b container pb-4 mx-auto'>Our Latest News </h1>
        <div className='bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 max-w-7xl   py-11 container mx-auto flex-wrap px-4'>
            {posts.map((bd, i)=> <BlogCard key= {i} blogdata={bd}></BlogCard>)}
          
        
        </div>
     
    </>
    );
};

export default BlogSeactionOfHomePage;