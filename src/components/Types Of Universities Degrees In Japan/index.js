import React from 'react';
import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
import slide1 from '../../image/slide1.2.jpg'
// import InfoPart from './components/info section';
import DegreesSection from './components/degrees';
const TypesOfUniversitiesDegreesInJapanPage = () => {
    return (
        <div>
            <HeaderOfPage img={slide1}><h1>TYPES OF UNIVERSITIES & DEGREES IN JAPAN</h1></HeaderOfPage>
           <Breadcrumbs pageName='Types Of Universities & Degrees In Japan'/>
           {/* <InfoPart/> */}
           <DegreesSection/>
        </div>
    );
};

export default TypesOfUniversitiesDegreesInJapanPage;