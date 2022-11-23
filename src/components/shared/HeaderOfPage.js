import Image from 'next/image';
import React from 'react';
const HeaderOfPage = ({children,img}) => {
    // style={{ backgroundImage: `url("${slideImg}")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}
    return (
        <div className="min-h-[40vh] relative mx-auto">
        <div>
            <Image src={img} layout='fill' alt="slide picture" />
        </div>
        <div className='absolute custom-bg h-full w-full flex justify-center items-center text-base-100  text-center text-4xl font-bold px-4 space-y-3'>
            {children}
          
        {/* <Link href="/eligibility"><a className="btn btn-primary text-base-100 mx-2">Free Eligibility Check</a></Link> */}
        </div>
    </div>
    );
};

export default HeaderOfPage;