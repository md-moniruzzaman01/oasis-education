import React, { useContext, useState} from 'react';
import Head from 'next/head'
import FooterPage from '../Footer';
import SubcribeSection from '../HomePage/Subscribe section.js';
import Modal from '../Modal';
import { Navitems } from '../../utilities/Home/NavItems';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';
import Image from 'next/image';
import AppContext from '../../utilities/Functions/AppContext';
const Layout = ({ children }) => {
    const [search, setSearch] = useState(false)
    const {setSearchValue,setIsSearch } = useContext(AppContext);
    const Navitem = Navitems.map((item, index) => <li key={index} className="mx-4  font-semibold w-auto py-1 uppercase flex items-center md:justify-center md:w-auto  md:mx-1"> <Link href={item.url} ><a >{item.text} </a></Link></li>)

    return (
        <>
            <Head>
                <title>Oasis globle education</title>
                <meta name="description" content="Developing with Moniruzzaman" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">

                        <div className="w-full navbar bg-base-100 fixed z-50 shadow">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">
                                <Image height={60} width={150} src='/Oasis-Global-Education.png' alt="" />
                            </div>
                            <div className={`flex-none hidden lg:block px-4  ${search ? 'w-8/12':''}`}>
                                <ul className="menu menu-horizontal w-full">

                                    {
                                        search ?
                                            <div className=' flex justify-between w-full lg:w-8/12 h-11 bg-white'>
                                                <input className='bg-gray-100 px-7 rounded-l-md w-11/12 focus:outline-none' type="search" name="search"  placeholder='Search here....' 
                                                 onChange={(e) => setSearchValue(e.target.value)}/>
                                                <button className='flex  justify-center items-center px-3 bg-slate-200 rounded-r-md text-xl' onClick={()=>setIsSearch(true)}><MdSearch /></button>
                                            </div>
                                            : <div className='w-full block md:flex justify-around '>
                                                <div className='flex md:hidden justify-between w-[92%] mx-4  mb-4 h-11 '>
                                                    <input className='bg-gray-100 px-7 rounded-l-md w-11/12 focus:outline-none' type="search" name="search" id="" placeholder='Search here....' />
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

                        <div className='mt-[77px]'>
                            <main>
                                {children}
                            </main>
                            <SubcribeSection />
                            <FooterPage />
                            <Modal />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 items-start">
                            <div className='mb-4  bg-white flex justify-between w-full h-11 md:w-full lg:w-8/12 du'>
                                <input className='bg-gray-100 px-7 rounded-l-md w-11/12 focus:outline-none' type="search" name="search" id="" placeholder='Search here....' 
                                 onChange={(e) => setSearchValue(e.target.value)}/>
                                <button className='flex  justify-center items-center px-3 bg-slate-200 rounded-r-md text-xl' onClick={()=>setIsSearch(true)}><MdSearch /></button>
                            </div>
                            {Navitem}

                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;