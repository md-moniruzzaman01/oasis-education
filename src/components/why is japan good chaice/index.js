import React from 'react';
import Breadcrumbs from '../shared/Breadcrumbs';
import InfoSectionOfWhyStudypage from './components/InfoSectionOfWhyStudypage';
import slide1 from '../../image/slide1.2.jpg'
import HeaderOfPage from '../shared/HeaderOfPage';
 import BlogSeactionOfHomePage from '../HomePage/Blog'
const WhyIsJapanGoodChaice = () => {
    return (
        <div>
            <HeaderOfPage img={slide1}><h1>WHY IS JAPAN A GOOD CHOICE FOR STUDYING ABROAD?</h1></HeaderOfPage>
           <Breadcrumbs pageName='Why Is Japan A Good Choice For Studying Abroad?'/>
           <InfoSectionOfWhyStudypage/>
           <BlogSeactionOfHomePage/>
        </div>
    );
};

export default WhyIsJapanGoodChaice;