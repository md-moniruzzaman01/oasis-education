import React from 'react';
import { Icons } from '../../../utilities/Home/Icons';
import IconCard from './IconCard';
const HomepageIcon = () => {

    return (
        <div className='bg-primary h-44 w-full'>
           
            <div className='max-w-7xl text-white grid grid-cols-3 gap-5 mx-auto'>
               {
                Icons.map((icon,i)=> <IconCard key={i} icon={icon}></IconCard>)
               }
            </div>

        </div>
    );
};

export default HomepageIcon;