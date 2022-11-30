import Image from 'next/image';
import React from 'react';
const CommenetCard = ({ data }) => {
    return (
        <div className='text-base-100 w-full min-h-[500px] flex items-center custom-background'>
            <div className='w-10/12 max-w-4xl mx-auto p-4'>
                <div className='flex justify-center my-4'><Image src={data?.img} className="rounded-full" height={100} width={100} alt="client photo" /></div>
                <p className='text-center text-lg'>{data?.comment.slice(0, 300)}..</p>
                <div className='flex flex-col items-end mt-7'>
                    <p className='font-bold text-xl'>{data?.Name}</p>
                    <p>- {data?.company}</p>
                </div>
            </div>


        </div>
    );
};

export default CommenetCard;