import React from 'react';

const IconCard = ({ icon }) => {
    return (
        <div className='mt-7'>
            <div className='flex justify-center mb-2'>
                <h3 className='h-16 md:h-24 w-16 md:w-24 text-4xl md:text-7xl flex items-center justify-center border-2  rounded-full'>{icon.icon}</h3>
            </div>
                <p className='text-center text-sm md:text-lg'>{icon.IconTitle}</p>
        </div>
    );
};

export default IconCard;