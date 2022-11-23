import React from 'react';
import Carosol from '../components/HomePage/Carosol';
import HomepageIcon from '../components/HomePage/HomePageIcon';
import Info from '../components/HomePage/Info';
import OurTeam from '../components/HomePage/OUR TEAMS';
import OurPrograms from '../components/HomePage/Programs';


const HomePage = ({bannerURL}) => {

   
  
    return (
        <div>
            <Carosol bannerURL={bannerURL}/>
            <HomepageIcon/>
            <Info/>
            <OurPrograms/>
            <OurTeam/>
          
        </div>
    );
};

export default HomePage;