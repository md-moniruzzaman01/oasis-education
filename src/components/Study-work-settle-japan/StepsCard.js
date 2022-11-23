import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StepsCard = () => {
    return (
        <div className='flex justify-center items-center  w-full' data-aos="fade-up" data-aos-duration="2000">
        <div className="rounded overflow-hidden bg-base-100 relative   w-[350px] hover:shadow-md min-h-[330px] service-container">
            <div className=''>

                <Image src="https://placeimg.com/400/225/arch"  alt="swift services" height={252} width={352} />

            </div>
            <div className="px-4 py-1">
                <div className="font-semibold text-2xl mb-2 hover:text-primary"><Link href={`/qualification/k`}><a >How To Pick Your Study-Abroad Program?</a></Link></div>

            </div>

        </div>
       
    </div>
    );
};

export default StepsCard;