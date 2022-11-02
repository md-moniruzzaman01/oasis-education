import React from 'react';
import { Icons } from '../../../utilities/Home/ProgramsIcons';
import ProgramsCard from './ProgramsCard';
const Programs = () => {

    return (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-8 max-w-7xl mx-auto my-20'>
                {Icons.map((item, index) => <ProgramsCard key={index} IconCard={item} />)}

            </div>
    );
};

export default Programs;