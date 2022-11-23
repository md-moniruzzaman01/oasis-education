import Image from 'next/image';
import React from 'react';
import tabImg from '../../image/Glare.png'
const AboutInfo = () => {
    return (
        <div className=''>
         <div className='flex min-h-[80vh] justify-between items-center max-w-7xl mx-auto '>
            <div className='w-11/12 mx-auto my-7 md:w-5/12'>
                <Image src={tabImg} height={600}  alt="talking to guys" />
            </div>
            <div className='w-11/12 mx-auto md:w-5/12 space-y-4'>
                <h1 className="text-4xl mb-11 font-bold leading-tight">ABOUT US</h1>
                <p className='text-lg '>
                The country of first choice for migration immediately after COVID-19 is, undoubtedly Japan, especially, with its current popularity, stable economy, and a wide array of schools and universities providing career opportunities, and a settlement circumstance, thereafter. Japan is a culturally rich and technologically advanced nation is a desirable destination for international students. Japan offers a once-in-a-lifetime opportunity for students from India, Sri Lanka, and other countries, as well.
                </p>
            </div>
        </div>
       </div>
    );
};

export default AboutInfo;