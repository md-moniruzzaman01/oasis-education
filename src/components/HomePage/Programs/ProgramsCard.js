import React from 'react';

const ProgramsCard = ({ IconCard }) => {
    return (
        <div className="card  hover:scale-110 duration-500 hover:shadow-lg max-w-[24rem] mx-auto programs-card border hover:border-primary">
            <div className="card-body p-4 text-center">
                <div className="card-actions justify-center">
                    <div className='border-2 rounded-full border-secondary text-secondary '><p className=' w-16 h-16 md:h-16 lg:h-24 md:w-16 lg:w-24  text-3xl lg:text-5xl flex items-center justify-center programs-icon duration-500'>{IconCard.icon}</p></div>
                </div>
                <h2 className="card-title text-sm md:text-lg font-semibold justify-center">{IconCard.IconTitle}</h2>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
        </div>
    );
};

export default ProgramsCard;