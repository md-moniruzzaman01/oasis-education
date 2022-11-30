import React from 'react';
import { Icons } from '../../../utilities/Home/Icons';
import IconCard from './IconCard';
const HomepageIcon = () => {

    return (
        <div className='w-full md:absolute md:bottom-[-100px]'>
           
            <div className='max-w-7xl bg-base-100 grid grid-cols-1 md:grid-cols-3 mx-auto'>
               {
                Icons.map((icon,i)=> <IconCard key={i} icon={icon}></IconCard>)
               }
            </div>

        </div>
    );
};

export default HomepageIcon;