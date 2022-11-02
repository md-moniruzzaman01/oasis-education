import React from 'react';
import { ImYoutube2 } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const SocialIcons = () => {
    const socialIconstyle = "flex duration-500 justify-center items-center w-9 h-9 hover:bg-white hover:text-primary rounded-full"
    return (
        <div>
             <div className='flex justify-around text-lg w-36 text-gray-400'>
                <p className={socialIconstyle}><FaFacebookF/></p>
                <p className= {socialIconstyle}><AiOutlineTwitter/></p>
                <p className=  {`text-2xl ${socialIconstyle}`}><ImYoutube2/></p>
                
                
            </div>
        </div>
    );
};

export default SocialIcons;