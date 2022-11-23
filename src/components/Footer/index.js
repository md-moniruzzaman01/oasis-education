import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Oasis-Global-Education.png'
const FooterPage = () => {
    const date = new Date
    const years = date.getFullYear();
    return (
        <div>
            <footer className="footer p-10 bg-primary text-base-100">
                <div>
                    <Image src={logo} height={60} alt="logo" />
                    <p className='text-md'>Oasis Globle Education<br />Globle Education since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Navigations</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <h1 className="footer-title text-xl flex opacity-80">Contact Us</h1>
                    <h1 className=" flex items-center text-md  font-semibold mt-1 "><span className=' font-bold mr-2 text-md'> </span>+61 422 528 597</h1>
                    <div>

                        <p className='flex items-center text-md font-semibold  mt-1'><span className='mr-2 text-xl'></span>info@swifteducation.com.au</p>
                        <p className='text-md font-semibold  flex mt-2'> <span className='mr-2 text-xl'></span>Suite 11, 41 Rickard Road, Bankstown, NSW-2200</p>

                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-neutral text-base-100">
                <div>
                    <p>Copyright © {years} - All right reserved by Oasis Global Education<span> | <a href="https://dev-moniruzzaman.web.app/" target="_blank" rel="noreferrer">Designed By Mmr Creation Ltd.</a></span></p>
                    
                </div>
            </div>
        </div>
    );
};

export default FooterPage;