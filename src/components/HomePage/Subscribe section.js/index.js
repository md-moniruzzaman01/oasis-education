import React from 'react';

const SubcribeSection = () => {
    return (
        <div className='bg-secondary  w-full text-base-100 flex items-center'>
            <div className='max-w-7xl py-7 md:py-16 mx-auto w-full static md:flex'>
                <div className='w-full md:w-1/2 text-center'>
                    <h2 className='text-2xl md:text-4xl font-bold uppercase'>Subscribe For Our Blogs</h2>
                    <div className='flex justify-center mb-2'>
                        <p className='w-9 mdw-16 bg-base-100 h-[2px] text-center'></p>
                    </div>
                    <p>Sign up to receive email updates about courses</p>
                </div>
                <div className='w-full mt-4 md:mt-0  md:w-1/2'>
                    <div className=" w-full flex justify-center">
                        <input type="text" placeholder="Type email here..." className="input input-bordered w-8/12 md:w-full max-w-sm rounded-none text-black" />
                        <button className='btn btn-primary rounded-none text-base-100 '>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubcribeSection;