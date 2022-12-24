import React from 'react';
import BlogCard from '../HomePage/Blog/BlogCard';
import BlogPageAside from './Components/Aside';
import PaginationOfBlog from './Components/PaginationOfBlog';
const BlogContainer = ({ data,setCurrentPage,limit}) => {
    return (
        <div className='min-h-screen max-w-screen-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-[70%_30%]'>
                <div className='bg-gray-200  py-11  mx-auto px-4 w-full'>
                    <div className='max-w-[800px] mx-auto'>
                        <h1 className='text-center text-4xl font-semibold container pb-4 mx-auto'>Latest Blogs </h1>
                        {data && data.map((dt, i) => <BlogCard key={i} blogdata={dt}></BlogCard>)}
                    </div>
                    <PaginationOfBlog setCurrentPage={setCurrentPage} limit={limit}/>
                </div>
                <BlogPageAside />
            </div>

        </div>
    );
};

export default BlogContainer;