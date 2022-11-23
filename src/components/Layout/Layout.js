import React from 'react';
import Head from 'next/head'
import NavBarTop from '../Navbar/index';
import NavbarMain from '../Navbar/NavbarMain';
import FooterPage from '../Footer';
import SubcribeSection from '../HomePage/Subscribe section.js';
import Modal from '../Modal'
const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Oasis globle education</title>
                <meta name="description" content="Developing with Moniruzzaman" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <header>
                    <nav>
                        <NavBarTop/>
                        <NavbarMain/>
                    </nav>
                </header>
              <main>
                {children}
              </main>
            <SubcribeSection/>
                    <FooterPage/>
                    <Modal/>
            </div>
        </>
    );
};

export default Layout;