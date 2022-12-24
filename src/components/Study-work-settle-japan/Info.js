import Image from 'next/image';
import React from 'react';
import storyImg from '../../../public/Oasis-our-story.png'
const Info = () => {
    return (
       <div className='bg-primary'>
         <div className='static py-11 md:py-0 md:flex min-h-[80vh] text-base-100 justify-between items-center max-w-7xl mx-auto '>
            <div className='w-11/12 mx-auto my-7 md:w-5/12'>
                <Image src={storyImg} height={600}  alt="talking to guys" />
            </div>
            <div className='w-11/12 mx-auto md:w-6/12 space-y-4'>
                <h1 className="text-3xl font-semibold leading-tight">STUDY -WORK – SETTLE IN JAPAN</h1>
                <p className='text-lg md:text-base'>
                The country of first choice for migration immediately after COVID-19 is, undoubtedly Japan, especially, with its current popularity, stable economy, and a wide array of schools and universities providing career opportunities, and a settlement circumstance, thereafter. Japan is a culturally rich and technologically advanced nation is a desirable destination for international students. Japan offers a once-in-a-lifetime opportunity for students from India, Sri Lanka, and other countries, as well.
                </p>
                <p className='text-lg md:text-base my-4'>
                International experiences are exhilarating and when it comes to academics and career, a few countries are rich in culture and technology and provide top-notch education and career opportunities. Getting a chance to study abroad while earning college credit parallelly, is extraordinary and worth a fortune. Several countries provide course options at various prestigious universities that complement your study with a for-credit internship, as well as matchless career opportunities later on. Not only does it let you attain a deeper insight into academics and career opportunities but it also gets you to clap your eyes on the professional and personal culture and language of the specific country.
                </p>
            </div>
        </div>
       </div>
    );
};

export default Info;