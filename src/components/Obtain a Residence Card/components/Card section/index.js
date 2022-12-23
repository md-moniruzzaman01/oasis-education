import React from 'react';
import { FirstPartContaint, LastPartContaint, MidpartContaint } from '../../../../utilities/residence card/CardContaint';
import Card from './Card';

const CardSection = () => {
    return (
        <div className='min-h-screen bg-primary'>
            <div className="max-w-6xl mx-auto text-base-100 py-20">
                {/* first part */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-11 px-4'>
                    {FirstPartContaint && FirstPartContaint.map((data, i) => <Card key={i} data={data}></Card>)}
                </div>
                {/* midlepart */}
                <div className='px-4'>
                    <div className="card mx-auto programs-card border max-w-[50rem] rounded-none">
                        <div className="card-body p-4 text-center">
                            <p className='text-sm'>{MidpartContaint}</p>
                        </div>
                    </div>
                </div>
                {/* lastpart */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-11 px-4'>
                    {LastPartContaint && LastPartContaint.map((data, i) => <Card key={i} data={data}></Card>)}
                </div>
            </div>

        </div>
    );
};

export default CardSection;