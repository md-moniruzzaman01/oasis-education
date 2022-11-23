import Image from 'next/image';
import React from 'react';
import oasis1 from '../../image/osis1.jpg';
import oasis2 from '../../image/Alumni-Testimonials-from-OLFU.jpg'

const CoreValue = () => {
    return (
        <div className=''>
            <h2 className='text-xl md:text-2xl text-center'>OUR CORE VALUES</h2>
            <div className='min-h-screen max-w-7xl mt-20 mx-auto px-5 mb-20'>

                <div className=' w-full flex flex-col-reverse md:flex-row justify-between my-5'>
                    <div className='w-full md:w-6/12 flex items-center my-5 justify-center'>

                        <div className='w-full md:w-10/12 space-y-3'>
                            <h1 className='font-bold text-2xl md:text-3xl'>WHO WE ARE</h1>
                            <p className='text-md'>We are a team of professionals who experienced challenges in the overseas education industry and we wanted to bring something which is transparent and trustworthy. We have started OASIS after realizing that, how many students are struggling during the course and after completion of the course because of the wrong information provided by some agents. We have taken this seriously because we wanted to support the students to accomplish their desire by providing them with the right information. We have worked out the complete process for a students life journey when they study abroad. We also have special experienced talent in every process to make sure that we are providing adequate information to students with which they can choose the right country and university.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 flex justify-center'>
                        <Image src={oasis1} className="rounded" width={600} height={350} alt="" />


                    </div>

                </div>
                <div className=' w-full flex flex-col-reverse md:flex-row-reverse  justify-between my-5'>
                    <div className='w-full md:w-6/12 flex items-center my-5 justify-center'>

                        <div className='w-full md:w-10/12 space-y-3'>
                            <h1 className='font-bold text-2xl md:text-3xl'>WHY OASIS</h1>
                            <p className='text-md'>Our Founder Mr.Saji Samuel has gone through all the admission process personally when he sent his elder son for medical admission in the Philippines. Because we have undergone this for our children, we know the worries of the parents. How much they are concerned about the country, university, course, safety, financial protection. Etc. We have also seen how some agents are misleading the students with false information and fake promises. We have joined together as OASIS to give clarity on all the mentioned challenges to the parents and give desired future for the students by supporting all the professional knowledge what we have. Here we are not recommending a university or a country which we have not experienced, but OASIS is sending the students to study where we entrusted our own children’s future.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 flex justify-center'>
                        <Image src={oasis2} className="rounded" width={600} height={350} alt="" />


                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoreValue;