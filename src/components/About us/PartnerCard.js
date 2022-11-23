import Image from 'next/image';
import React from 'react';

const PartnerCard = ({img}) => {
    return (
        <div className='flex justify-center items-center'>
           <Image src={img} height={120} alt="partner logo" />
        </div>
    );
};

export default PartnerCard;