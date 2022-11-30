import Image from 'next/image';
import React from 'react';

const CarousolCard = ({item}) => {
    return (
        <div className="lg:h-[650px] h-[250px] md:h-[350px]">
            <div className='flex justify-center items-center'>
                <Image className='relative' layout='fill' src={item.banner} alt="carosol picture" />
            </div>
        </div>
    );
};

export default CarousolCard;