import React from 'react';
import AboutInfo from '../components/About us/AboutInfo';
import PartnerSlide from '../components/About us/PartnerSlide';
import HeaderOfPage from '../components/shared/HeaderOfPage';
import imgslide from '../image/slide2.2.jpg';
import CoreValue from '../utilities/About us/CoreValue';
import OurTeam from '../components/HomePage/OUR TEAMS';
import BlogSeactionOfHomePage from '../components/HomePage/Blog';
const AboutUsPage = () => {
    return (
        <div>
            <HeaderOfPage img={imgslide}><h1>About Us</h1></HeaderOfPage>
            <AboutInfo/>
            <PartnerSlide/>
            <OurTeam/>
            <CoreValue/>
            <BlogSeactionOfHomePage/>
        </div>
    );
};

export default AboutUsPage;