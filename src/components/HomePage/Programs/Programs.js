import React from 'react';
import { Icons } from '../../../utilities/Home/ProgramsIcons';
import ProgramsCard from './ProgramsCard';
const Programs = () => {

    return (
        <div className='mt-20 mb-44'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-8 max-w-7xl mx-auto'>
                {Icons.map((item, index) => <ProgramsCard key={index} IconCard={item} />)}

            </div>
        </div>
    );
};

export default Programs;