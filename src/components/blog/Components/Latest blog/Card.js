import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ data }) => {
    const { _id, title, BlogImg } = data;
    const imageData = BlogImg.slice(0, 4)
    let setImgUrl = '';
    if (imageData === "http") {
        setImgUrl = BlogImg
    }
    return (
        <div className='bg-base-100  p-2 my-4'>
            <div className='flex justify-start'>
                <figure ><Image src={setImgUrl} width={250} height={200} className='w-10/12 mx-auto mt-9 h-64 blog-img' alt="blog picuture" /> </figure>
                <div className='ml-7 mb-auto'>
                    <Link href={`/blog/${_id}`}><a> <h2 className="card-title text-lg hover:underline cursor-pointer ">{title?.slice(0, 70)}</h2></a></Link>


                    <div className='flex justify-end'>
                        <Link href={`/blog/${_id}`}>
                            <p className='underline cursor-pointer text-blue-600'>Countinue<span className='text-xl mt-1'></span></p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;