import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const BlogCard = ({ blogdata }) => {
    const { title, _id } = blogdata;
    return (

        <div className=' bg-primary card  rounded-none max-w-[350px] mx-0'>

            <div className='mt-4'>
                <figure >
                    <Image src={blogdata?.Image} width={380} height={250} className='w-10/12 mx-auto mt-9 h-64 blog-img' alt="blog picuture" /> </figure>
            </div>
            <Link href={`./blog/${_id}`}><a>
                <div className=" rounded-none text-base-100">
                    <div className="card-body px-5">
                        <h2 className="card-title">{title?.slice(0, 70)}</h2>
                        <div className=''>
                 <p className='text-sm'>on march 13, 2022</p>
                        </div>

                    </div>
                </div>
            </a></Link>

        </div>
    );
};

export default BlogCard;