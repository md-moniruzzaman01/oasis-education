import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SortBlog = () => {
    return (
        <div className='bg-base-100 shadow-lg rounded p-9 my-4'>
        <div className='flex justify-start'>
            <figure ><Image src='' width={250} height={200} className='w-10/12 mx-auto mt-9 h-64 blog-img' alt="blog picuture" /> </figure>
            <div className='ml-7 mb-auto mt-5'>
                <Link href={`/blog/`}><a> <h2 className="card-title text-2xl ">iosdo</h2></a></Link>
                <p className='mt-1.5'>f <span>by Admin</span></p>
            </div>
        </div>
        {/* <article className='text-xl mt-5' dangerouslySetInnerHTML={{ __html: blogdata?.content.slice(0, 200) }} /> */}

        <div className='flex mt-4 items-center justify-between'>
            <div className='flex'>
                <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#blogs</p>
            </div>
        </div>


    </div>
    );
};

export default SortBlog;