import Image from 'next/image';
import React from 'react';
const HeaderOfPage = ({children,img}) => {
    return (
        <div className="min-h-[35vh] relative mx-auto">
        <div>
            <Image src={img} layout='fill' alt="slide picture" />
        </div>
        <div className='absolute custom-bg h-full w-full flex justify-center items-center text-base-100  text-center text-2xl md:text-4xl font-bold px-4 space-y-3'>
            {children}
          

        </div>
    </div>
    );
};

export default HeaderOfPage;