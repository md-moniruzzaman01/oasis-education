import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { Navitems } from '../../utilities/Home/NavItems';
import Logo from "../../../public/Oasis-Global-Education.png"
const NavbarMain = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false)
    const navBarBtnHandle = () => setOpen(!open)
    const Navitem = Navitems.map((item, index) => <li key={index} className="mx-4  font-semibold w-auto py-1 uppercase flex items-center md:justify-center md:w-auto  md:mx-1"> <Link href={item.url} ><a >{item.text} </a></Link></li>)

    const [active, setactive] = useState(false)


    if (typeof window !== "undefined") {
        window.onscroll = () => {
            if (window.scrollY > 120) {
                setactive(true);
            } else {
                setactive(false);
            }
        }
    }


    return (
        <div className={` ${active ? "fixed top-0 duration-500" : "static duration-500"} z-10 w-full  scroll-smooth bg-white shadow-md pb-2 navbar-fix`}>
            <div className='lg:container w-full mx-auto'>
                <div className='flex justify-between  items-center px-5 max-w-7xl mx-auto'>

                    <div className='h-16'>
                        <Image className='h-full' src={Logo} alt="" />
                    </div>

                    <div className='w-8/12 flex justify-end'>

                        <div onClick={navBarBtnHandle} className='block md:hidden'>
                            {
                                open ? <AiOutlineClose /> : <FaBars />
                            }
                        </div>

                        <div className={`absolute z-50 bg-slate-100 md:bg-white h-screen md:h-full shadow-lg w-8/12 top-0  flex justify-center ${open ? 'left-0' : 'left-[-100%]'} md:static md:w-full md:shadow-none `}>

                            <ul className='w-full block md:flex justify-end '>
                                <p className='absolute top-[-5px] right-[-15px] p-2 text-xl rounded-full bg-gray-100 shadow md:hidden' onClick={() => setOpen(false)}><AiOutlineClose /></p>
                                <h1 className='text-xl my-3 text-center border-b mx-7 md:hidden'>menu</h1>

                                {
                                    search ?
                                        <div className='bg-white flex justify-between w-full h-11 md:w-full lg:w-8/12 du'>
                                            <input className='bg-gray-100 px-7 rounded-l-md w-11/12 focus:outline-none' type="search" name="search" id="" placeholder='Search here....' />
                                            <button className='flex  justify-center items-center px-3 bg-slate-200 rounded-r-md text-xl'><MdSearch /></button>
                                        </div>
                                        : <div className='w-full block md:flex justify-around '>
                                            <div className='flex md:hidden justify-between w-[92%] mx-4  mb-4 h-11 '>
                                                <input className='bg-gray-200 px-7 rounded-l-md w-11/12 focus:outline-none' type="search" name="search" id="" placeholder='Search here....' />
                                                <button className='flex  justify-center items-center px-3 bg-slate-200 rounded-r-md text-xl'><MdSearch /></button>
                                            </div>
                                            {
                                                Navitem
                                            }

                                        </div>
                                }

                                <button className='hidden md:block ml-3 text-xl' onClick={() => setSearch(!search)}>{search ? <AiOutlineClose /> : <MdSearch />}</button>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default NavbarMain;