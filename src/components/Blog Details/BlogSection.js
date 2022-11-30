import React from 'react';
import { BiUserCircle } from "react-icons/bi";
import Image from 'next/image';
import RelatedPosts from './Related post';
const BlogSection = ({post}) => {
    return (
             
                   <div className='max-w-4xl mx-auto w-11/12 my-4'>
                   <h1 className='text-2xl font-semibold'>{post.title}</h1>
                   <div className='text-gray-500 px-1 pb-3 flex items-center '>
                       <p className='mr-1 text-xl'><BiUserCircle/></p>
                       <p> Posted by admin . 24 Nov 2022</p>
                   </div>
                  
                       <Image
                           alt='Blog photo'
                           src={post?.Image}
                           width={1200}
                           height={700}
                           // objectFit='contain'
                       />
                 
                   <div className='min-h-[20vh] p-4'
                   dangerouslySetInnerHTML={{ __html: post?.content }}
               />
             <RelatedPosts/>
               </div>
    );
};

export default BlogSection;