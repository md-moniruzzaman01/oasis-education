
import React from 'react';
import BlogPageAside from '../blog/Components/Aside';

import BlogSection from './BlogSection';
const SingleBlogDetailsPage = ({ post }) => {
    return (
        <div className='min-h-screen grid grid-cols-1 md:grid-cols-[70%_30%]'>
            <BlogSection post={post} />
            <BlogPageAside />
        </div>
    );
};
export default SingleBlogDetailsPage;