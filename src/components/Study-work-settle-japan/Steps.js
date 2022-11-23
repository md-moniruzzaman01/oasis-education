import React from 'react';
import StepsCard from './StepsCard';

const Steps = () => {
    return (
        <div>
            {/* service card section */}
            <section className='py-16 bg-slate-50 mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-5 md:px-20 pb-7 mx-auto max-w-7xl">
                    {/* {data.map(service =>  */}
                    <StepsCard></StepsCard>
                    <StepsCard></StepsCard>
                    <StepsCard></StepsCard>
                    <StepsCard></StepsCard>
                    <StepsCard></StepsCard>
                    {/* )} */}
                </div>

            </section>
        </div>
    );
};

export default Steps;