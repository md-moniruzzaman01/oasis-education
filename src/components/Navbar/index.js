import React from 'react';
import SocialIcons from './SocialIcons';
const NavTopStyle ='px-3 border-r h-4 flex justify-center items-center hover:text-blue-400 duration-300';
const NavBarTop = () => {

    return (
        <div className='bg-primary md:py-2 w-full '>
            
            <div className='max-w-7xl mx-auto md:flex hidden'>
                <SocialIcons />
                <ul className='flex  text-gray-200 justify-center items-center px-4 text-sm cursor-pointer'>
                    <li className={NavTopStyle}>News & Events</li>
                    <li className={NavTopStyle}>Blog</li>
                    <li className={NavTopStyle}>Call</li>
                    <li className={NavTopStyle}>Whatsapp</li>
                    <li className={NavTopStyle}>Fix Online Meeting</li>
                    <li className={`${NavTopStyle} border-r-0`}>About us</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarTop;