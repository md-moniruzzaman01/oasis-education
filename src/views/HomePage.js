import React from 'react';
import BlogSeactionOfHomePage from '../components/HomePage/Blog';
import Carosol from '../components/HomePage/Carosol';
import HomepageIcon from '../components/HomePage/HomePageIcon';
import Info from '../components/HomePage/Info';
import OurTeam from '../components/HomePage/OUR TEAMS';
import OurPrograms from '../components/HomePage/Programs';
import SubcribeSection from '../components/HomePage/Subscribe section.js';

const HomePage = ({bannerURL,posts}) => {

   
  
    return (
        <div>
            <Carosol bannerURL={bannerURL}/>
            <HomepageIcon/>
            <Info/>
            <OurPrograms/>
            <OurTeam/>
            <BlogSeactionOfHomePage posts={posts}/>
            <SubcribeSection/>
        </div>
    );
};

export default HomePage;