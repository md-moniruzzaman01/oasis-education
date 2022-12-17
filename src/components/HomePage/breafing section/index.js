import Image from 'next/image';
import React from 'react';
import heroImg from '../../../image/education_bg-1024x692.jpg'
const BrifingSection = () => {
    return (
        <div className='max-w-7xl  mx-auto my-16'>
            <div className='static md:flex'>
                <div className='w-full md:w-5/12'>
                    <div>
                        <Image width={600} height={500} src={heroImg} alt="man with a  laptop" />
                    </div>
                </div>
                <div className='md:ml-11 px-4 md:px-0 w-full md:w-6/12 my-11 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-2xl md:text-4xl font-bold'>WELCOME TO OASIS EDUCATION</h2>
                        <p className='text-xl md:text-2xl my-2'>
                            We Are Eager To Give You Best Education And Style.
                        </p>
                        <p className='my-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat mauris quis volutpat fermentum. Nunc nec nisi vitae ipsum pharetra tincidunt. Nam vel purus dolor. Aliquam erat volutpat. Donec laoreet iaculis elementum. Aliquam ligula nisi, molestie faucibus tortor quis, vulputate imperdiet turpis. In iaculis arcu et aliquam dapibus. Nulla facilisi.
                        </p>
                        <p className='my-4'>
                            Nunc pellentesque euismod felis id posuere. Nunc maximus aliquet varius. Cras ornare tristique est vel porttitor. Fusce tempor, augue sagittis congue ornare, tortor augue elementum augue, quis egestas nisi ipsum eget urna. Suspendisse vitae lectus quis turpis dapibus euismod eget a metus. Nulla eget nunc purus. Ut egestas et nulla at pretium. Pellentesque sed varius lectus.
                        </p>
                    </div>
                    <p className='font-semibold underline text-red-700  '>Get Start Now</p>
                </div>
            </div>
        </div>
    );
};

export default BrifingSection;