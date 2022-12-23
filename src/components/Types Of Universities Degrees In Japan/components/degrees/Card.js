import React from 'react';

const Card = ({data}) => {

    return (
        <div className="card max-w-[24rem] mx-auto programs-card my-2">
            <div className="card-body p-4 text-center">
                <div className="card-actions justify-center">
                    <div className='border-2 rounded-full border-secondary text-secondary '><p className=' w-16 h-16 md:h-16 lg:h-24 md:w-16 lg:w-24  text-3xl lg:text-5xl flex items-center justify-center programs-icon duration-500'>{data?.icon}</p></div>
                </div>
                <h2 className="card-title text-sm md:text-lg font-semibold justify-center">{data?.IconTitle}</h2>
            </div>
        </div>
    );
};

export default Card;