import React from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter,FaRss } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const BlogPageAside = () => {
    return (
        <aside>
            <div className='category w-full   bg-gray-100 min-h-[90vh] '>
                 {/* Tag Cloud */}
                <div >
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold'>Tag Cloud</h1>
                        <p className='ml-2 w-6/12 border-b-2 border-red-400'></p>
                    </div>
                    <div className='flex flex-wrap'>
                        <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#Japanese</p>
                        <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#Japanese</p>
                        <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#Japanese</p>
                        <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#Japanese</p>
                    </div>
                </div>
                {/* Follow Me */}
                <div className='my-11 '>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold'>Follow Me!</h1>
                        <p className='ml-2 w-6/12 border-b-2 border-red-400'></p>
                    </div>
                    <div className='flex flex-wrap mt-5 space-x-2'>
                        <div className='w-[90px] h-[90px] border-2 border-[#3563C2] flex justify-center items-center'>
                            <div className='w-[80px] hover:w-[89px] h-[80px] hover:h-[89px]  socil-icon-transform duration-150 bg-[#3563C2] flex justify-center items-center text-3xl'>
                                <GrFacebookOption/>
                            </div>
                        </div>
                        <div className='w-[90px] h-[90px] border-2 border-[#63CDF1] flex justify-center items-center'>
                            <div className='w-[80px] hover:w-[89px] h-[80px] hover:h-[89px]  socil-icon-transform duration-150 bg-[#63CDF1] flex justify-center items-center text-3xl'>
                                <FaTwitter/>
                            </div>
                        </div>
                        <div className='w-[90px] h-[90px] border-2 border-[#EE6CC3] flex justify-center items-center'>
                            <div className='w-[80px] hover:w-[89px] h-[80px] hover:h-[89px]  socil-icon-transform duration-150 bg-[#EE6CC3] flex justify-center items-center text-3xl'>
                                <BsInstagram/>
                            </div>
                        </div>
                        <div className='w-[90px] h-[90px] border-2 border-[#F7B454] flex justify-center items-center'>
                            <div className='w-[80px] hover:w-[89px] h-[80px] hover:h-[89px]  socil-icon-transform duration-150 bg-[#F7B454] flex justify-center items-center text-3xl'>
                                <FaRss/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default BlogPageAside;