import React from 'react';
import Carosol from '../components/HomePage/Carosol';
import CommentsSection from '../components/HomePage/Comments';
import Info from '../components/HomePage/Info';
import OurTeam from '../components/HomePage/OUR TEAMS';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BrifingSection from '../components/HomePage/breafing section';
import Programs from '../components/HomePage/Programs/Programs';
import BlogSeactionOfHomePage from '../components/HomePage/Blog';

const HomePage = ({bannerURL}) => {

   
  
    return (
        <div>
            <Carosol bannerURL={bannerURL}/>
            <Info/>
            <Programs/>
            <BrifingSection/>
            <OurTeam/>
            <CommentsSection/>
            <BlogSeactionOfHomePage/>
          
        </div>
    );
};

export default HomePage;