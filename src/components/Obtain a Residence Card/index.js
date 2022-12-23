import React from 'react';
import slide1 from '../../image/headerImag.jpg'
import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
import BlogSeactionOfHomePage from '../HomePage/Blog';
import AboutObtainingAResidenceCard from './components/Info about residence card';
import CardSection from './components/Card section';
const ObtainAResidenceCard = () => {
    return (
        <div>
            <HeaderOfPage img={slide1}><h1>ALL YOU NEED TO KNOW ABOUT OBTAINING A RESIDENCE CARD</h1></HeaderOfPage>
            <Breadcrumbs pageName='All You Need To Know About Obtaining A Residence Card' />
            <AboutObtainingAResidenceCard/>
            <CardSection/>
            <div className='bg-slate-50 min-h-[80vh] pt-5'>
                <BlogSeactionOfHomePage />
            </div>
        </div>
    );
};

export default ObtainAResidenceCard;