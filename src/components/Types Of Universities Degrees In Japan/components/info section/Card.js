import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
const Card = ({data}) => {
    return (
        <div className="card  mx-auto programs-card">
            <div className="card-body p-2 text-center">
                <div className="card-actions justify-center">
                    <div className='border-2  bg-slate-100 hover:bg-secondary rounded-full border-secondary text-secondary '><p className=' w-16 h-16 md:h-16 lg:h-24 md:w-16 lg:w-24  text-3xl lg:text-5xl flex items-center justify-center programs-icon duration-300 '>{<FaGraduationCap/>}</p></div>
                </div>
                {/* <h2 className="card-title text-sm md:text-lg font-semibold justify-center">d</h2> */}
                <p>{data?.IconTitle}</p>
            </div>
        </div>
    );
};

export default Card;