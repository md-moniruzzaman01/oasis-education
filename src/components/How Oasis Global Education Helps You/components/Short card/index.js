import React from 'react';
import { CardContain } from '../../../../utilities/How oasis globle help you/ShortCardContaint';
import Card from './Card';

const ShortCard = () => {
    return (
        <div className='static md:flex my-20 max-w-6xl mx-auto'>
            {CardContain && CardContain.map((data,i)=> <Card key={i} data={data}/>) }
        </div>
    );
};

export default ShortCard;