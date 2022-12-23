import React from 'react';
import imgslide from '../image/slide1.1.jpg'
import HeaderOfPage from '../components/shared/HeaderOfPage'
import Breadcrumbs from '../components/shared/Breadcrumbs';
import BlogContainer from '../components/blog';
const BlogePage = () => {
    return (
        <div>
             <HeaderOfPage img={imgslide}><h1 className='border-b-2'>BLOG</h1></HeaderOfPage>
             <Breadcrumbs pageName="Blog"/>
             <BlogContainer />
        </div>
    );
};

export default BlogePage;