
import React from 'react';

import BlogSection from './BlogSection';
const SingleBlogDetailsPage = ({ post }) => {
    console.log(post);
    return (
        <div className='min-h-screen grid grid-cols-1 md:grid-cols-[70%_30%]'>
            <BlogSection post={post}/>
            <div className='bg-red-500 blog-category'>
                <h1>category</h1>
            </div>

        </div>
    );
};

export default SingleBlogDetailsPage;