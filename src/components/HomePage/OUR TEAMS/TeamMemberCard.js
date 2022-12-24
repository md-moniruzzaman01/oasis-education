import Image from 'next/image';
import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin,FiYoutube } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
const TeamMemberCard = ({member}) => {
    
    return (
        <div className='relative'>
            <Image src={member.Image} alt="Team member" />
            <div className='w-full h-[58%] duration-500 hover:h-[98%] absolute bottom-[5px] our-team-card flex items-center justify-center'>
                <div className=' h-32 w-10/12 flex flex-col justify-center items-center'>
                <h2 className='text-base-100 font-semibold text-lg  md:text-2xl inset-y-1/3'>{member.MemberName}</h2>
                <p className='flex text-sm md:text-xl space-x-3 mt-2 text-base-100'>
                    <span>
                        <FiFacebook/>
                    </span>
                    <span>
                        <FiTwitter/>
                    </span>
                    <span>
                        <FaGooglePlusG/>
                    </span>
                    <span>
                        <FiLinkedin/>
                    </span>
                    <span>
                        <ImPinterest2/>
                    </span>
                    <span>
                        <FiYoutube/>
                    </span>
                </p>
                </div>

            </div>
        </div>
    );
};

export default TeamMemberCard;