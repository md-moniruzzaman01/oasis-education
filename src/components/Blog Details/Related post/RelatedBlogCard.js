import Image from 'next/image';
import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
const RelatedBlogCard = ({ bd }) => {
    console.log(bd);
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                <figure><Image src={bd.Image} width={300} height={250} alt="Blog Photo" /></figure>
                <div className="card-body">
                    <h2 className="text-lg font-semibold">{bd.title.slice(0,42)}..</h2>
                    <p dangerouslySetInnerHTML={{ __html: bd?.content.slice(0,100)}}></p>
                    <div className="card-actions">
                       <p className='text-2xl text-blue-600 flex justify-center'><BiRightArrowAlt/></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedBlogCard;