import React from 'react';
import { BiUserCircle } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import Image from 'next/image';
import RelatedPosts from './Related post';
const BlogSection = ({post}) => {
    const {title,BlogImg,view} = post
    const imageData = BlogImg.slice(0,4)
    let setImgUrl = '';
    if (imageData === "http") {
        setImgUrl = BlogImg
    }
console.log(setImgUrl);
    return (
             
                   <div className='max-w-4xl mx-auto w-11/12 my-4'>
                   <h1 className='text-3xl font-semibold '>{title}</h1>
                   <div className='text-gray-500 px-1 py-3 flex items-center '>
                       <p className='mr-1 text-xl'><BiUserCircle/></p>
                       <p> Posted by admin . 24 Nov 2022</p>
                       <p className='ml-2  text-xl'> <AiFillEye/></p>
                       <p className='ml-1'>{view}</p>
                   </div>
                  
                       <Image
                           alt='Blog photo'
                           src={setImgUrl}
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