import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { BiRightArrowAlt } from "react-icons/bi";
const BlogCard = ({ blogdata }) => {
    const { title, _id, BlogImg,Category } = blogdata;
    const imageData = BlogImg.slice(0, 4)
    let setImgUrl = '';
    if (imageData === "http") {
        setImgUrl = BlogImg
    }

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    const data = today.toLocaleDateString("en-US", options);
    return (
        <div className='bg-base-100 shadow-lg rounded p-9 my-4'>
            <div className='flex justify-start'>
                <figure ><Image src={setImgUrl} width={250} height={200} className='w-10/12 mx-auto mt-9 h-64 blog-img' alt="blog picuture" /> </figure>
                <div className='ml-7 mb-auto mt-5'>
                    <Link href={`/blog/${_id}`}><a> <h2 className="card-title text-2xl ">{title?.slice(0, 70)}</h2></a></Link>
                    <p className='mt-1.5'>{data} <span>by Admin</span></p>
                </div>
            </div>
            <article className='text-xl mt-5' dangerouslySetInnerHTML={{ __html: blogdata?.content.slice(0, 200) }} />

            <div className='flex mt-4 items-center justify-between'>
                <div className='flex'>
                    <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#{Category}</p>
                </div>
                <div>
                    <Link href={`/blog/${_id}`}>
                    <p className='flex items-center hover:underline cursor-pointer hover:text-blue-600'>Countinue reading <span className='text-xl mt-1'><BiRightArrowAlt /></span></p>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default BlogCard;