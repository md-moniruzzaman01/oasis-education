import React from 'react';
import Head from 'next/head'
import {Navitems} from "../utilities/NavItems"
import Link from 'next/link';
import Logo from "../../public/Oasis-Global-Education.png"
import Image from 'next/image';
import { AiOutlineSearch } from "react-icons/ai";
const Layout = ({ children }) => {
    const Navitem = Navitems.map((item, index) =><li key={index}> <Link href={item.url} ><a >{item.text} </a></Link></li>)
    const NavitemMoble = Navitems.map((item, index) => <li key={index}> <Link href={item.url}  ><a ><p className='flex items-center'><span className='mr-2 text-2xl font-bold'>{item.icon} </span>{item.text} </p> </a></Link> </li>)
    return (
        <>
            <Head>
                <title>Oasis globle education</title>
                <meta name="description" content="Developing with Moniruzzaman" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {/* Navbar drawer */}
                <div className="drawer">
                    <input id="Navbar-drawer-checker" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* <!-- Navbar --> */}
                        <nav className='bg-base-300'>
                            <header className="w-full navbar  max-w-[85rem] mx-auto">
                                
                                <div className="flex-1 px-2 mx-2">
                                    <Image src={Logo} alt="Logo" />
                                </div>
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="Navbar-drawer-checker" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <div className="flex-none hidden lg:block uppercase">
                                    <ul className="menu menu-horizontal text-primary font-semibold">
                                     
                                        {Navitem}
                                        <li><a className='text-xl font-semibold'><AiOutlineSearch/></a></li>
                                        
                                    </ul>
                                </div>

                            </header>
                        </nav>
                        {/* <!-- Page content here --> */}
                        <main>
                            {children}
                        </main>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="Navbar-drawer-checker" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 uppercase">
                            {/* <!-- Sidebar content here --> */}
                            {NavitemMoble}

                        </ul>

                    </div>
                </div>
                <footer>

                </footer>
            </div>
        </>
    );
};

export default Layout;