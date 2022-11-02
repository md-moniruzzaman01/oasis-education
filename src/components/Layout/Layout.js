import React from 'react';
import Head from 'next/head'
import NavBarTop from '../Navbar/index';
import NavbarMain from '../Navbar/NavbarMain';
import FooterPage from '../Footer';
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

                
                    <FooterPage/>
            </div>
        </>
    );
};

export default Layout;