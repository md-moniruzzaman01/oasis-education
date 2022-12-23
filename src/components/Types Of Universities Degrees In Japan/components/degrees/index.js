import React from 'react';
import { DegreesContaint } from '../../../../utilities/type of degrees/Degrees';
import Card from './Card';

const DegreesSection = () => {
    return (
        <div>
            <div className='min-h-screen bg-slate-100 py-20'>
                <h2 className='text-4xl text-center font-bold'>Types of Degrees in <span className='text-secondary'>Japan</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 mx-auto max-w-6xl'>
{DegreesContaint && DegreesContaint.map((data,i)=>  <Card key={i} data={data}/>)}
                </div>
            </div>
        </div>
    );
};

export default DegreesSection;