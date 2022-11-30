import Image from 'next/image';
import React from 'react';

const StepsCardForModal = ({imageURL, title}) => {
    return (
        <div className='flex justify-center items-center bg-base-100 w-full '>

            <div className="rounded overflow-hidden relative hover:shadow-md min-h-[350px] service-container">
                <div className=''>

                    <Image src={imageURL} alt="swift services" height={252} width={354} />

                </div>
                <div className="px-4 py-1">

                    <div className="font-semibold text-xl mb-2 hover:text-primary">{title}</div>


                </div>
            </div>

    </div >
    );
};

export default StepsCardForModal;