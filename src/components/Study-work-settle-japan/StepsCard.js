import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const StepsCard = ({ imageURL, title, urlLink }) => {
    return (
        <div className='flex justify-center items-center bg-base-100 w-full '>
            <Link href={urlLink}>
                <div className="rounded overflow-hidden relative hover:shadow-md min-h-[350px] service-container">
                    <div className=''>

                        <Image src={imageURL} alt="swift services" height={252} width={354} />

                    </div>
                    <div className="px-4 py-1">

                        <div className="font-semibold text-xl mb-2 hover:text-primary cursor-pointer">{title}</div>


                    </div>
                </div>
            </Link>

        </div >
    );
};

export default StepsCard;