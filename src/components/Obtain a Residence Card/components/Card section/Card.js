import React from 'react';

const Card = ({data}) => {
    const {Title,discribtion}= data;
    return (
        <div className="card mx-auto programs-card border rounded-none">
            <div className="card-body p-4 text-center">
                <div className="card-actions justify-center">
                </div>
                <h2 className="card-title text-sm md:text-lg font-semibold justify-center">{Title}</h2>
                <p className='text-sm'>{discribtion}</p>
            </div>
        </div>
    );
};

export default Card;