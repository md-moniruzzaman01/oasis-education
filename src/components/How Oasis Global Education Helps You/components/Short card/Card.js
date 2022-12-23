import React from 'react';

const Card = ({data}) => {
    return (
        <div className="card  mx-auto programs-card">
            <div className="card-body p-2 text-center">
                <div className="card-actions justify-center">
                    <div className='border-2  bg-slate-100 hover:bg-secondary rounded-full border-secondary text-secondary '><p className=' w-16 h-16 md:h-16 lg:h-20 md:w-11 lg:w-20  text-3xl lg:text-4xl flex items-center justify-center programs-icon duration-300 '>{data?.icon}</p></div>
                </div>
                <h2 className=" text-sm md:text-md font-semibold  justify-center">{data?.IconTitle}</h2>
                {/* <p>{data?.IconTitle}</p> */}
            </div>
        </div>
    );
};

export default Card;