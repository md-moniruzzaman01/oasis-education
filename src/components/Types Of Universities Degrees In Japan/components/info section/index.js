import Image from 'next/image';
import React from 'react';
import fatimaUniversityPhoto from '../../../../image/cetegory page image/Fatima-University-medical-Center.jpg'
import { cardContaint } from '../../../../utilities/type of degrees/shortCard';
import Card from './Card';
const InfoPart = () => {
    return (
        <div className='min-h-[80vh] bg-primary text-base-100 py-20'>
            <h1 className='text-center text-4xl font-bold'>Types Of Universities & Degrees In Japan : </h1>
            <div className='max-w-6xl mx-auto static md:flex justify-between my-20'>
                <div className='text-center w-full md:w-6/12'>
                    <h2 className='text-2xl font-semibold pb-2'>UNIVERSITIES</h2>
                    <p>You will find three types of universities depending on how they were founded. Private universities account for about 80% of all universities and have about 80% of all university students on their registers.</p>
                    <div className='grid grid-cols-3 gap-5 my-11'>
                        {cardContaint && cardContaint.map((data,i)=>  <Card key={i} data={data}/>)}
                    </div>
                </div>
                <div className=' w-full md:w-6/12 flex justify-end'>
                    <Image src={fatimaUniversityPhoto} className='rounded-lg' width={500} height={450} alt="fatima university photo" />
                </div>
            </div>
        </div>
    );
};

export default InfoPart;