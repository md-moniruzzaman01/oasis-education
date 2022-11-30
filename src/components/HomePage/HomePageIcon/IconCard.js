import React from 'react';

const IconCard = ({ icon }) => {
    return (
        <div className='md:flex items-center border p-4'>
            <div className='flex justify-center mb-2'>
                <h3 className='h-16 md:h-24 w-16 md:w-24 text-4xl md:text-7xl flex items-center justify-center border-2  rounded-full'>{icon.icon}</h3>
            </div>
            <div className='ml-4 text-center md:text-start'>
                <p className='text-sm md:text-lg font-semibold'>{icon.IconTitle}</p>
                <p className='mt-1'>Lorem ipsum dolor sit, amet cons adipisicing elit. Quo, temporibus!</p>
            </div>
        </div>
    );
};

export default IconCard;