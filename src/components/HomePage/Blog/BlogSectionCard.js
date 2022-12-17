import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const BlogSectionCard = ({ blogdata }) => {
    const { title, _id ,BlogImg} = blogdata;
    const imageData = BlogImg.slice(0,4)
    let setImgUrl = '';
    if (imageData === "http") {
        setImgUrl = BlogImg
    }
    console.log(imageData);
    return (
        <div className='bg-primary card min-h-[420px]  rounded-none mx-0'>
            <div className='mt-4 '>
                <figure >
                    <Image src={setImgUrl} width={380} height={250} className='w-10/12 mx-auto mt-9 h-64 blog-img' alt="blog picuture" /> </figure>
            </div>
            <Link href={`./blog/${_id}`}><a>
                <div className=" rounded-none text-base-100 ">
                    <div className="card-body px-5">
                        <h2 className="card-title text-base">{title?.slice(0, 70)}</h2>
                        <div className=''>
                            <p className='text-sm'>on march 13, 2022</p>
                        </div>

                    </div>
                </div>
            </a></Link>

        </div>
    );
};

export default BlogSectionCard;