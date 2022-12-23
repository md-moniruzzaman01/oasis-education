import React from 'react';
import slide1 from '../../image/slide1.2.jpg'
import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
import InfoSection from './components/info section';
import ShortCard from './components/Short card';
import BlogSeactionOfHomePage from '../HomePage/Blog';
const HowOasisGlobalEducationHelpsYouPage = () => {
    return (
        <div>
           <HeaderOfPage img={slide1}><h1>HOW OASIS GLOBAL EDUCATION HELPS YOU</h1></HeaderOfPage>
           <Breadcrumbs pageName='How Oasis Global Education Helps You'/>
           <InfoSection/>
           <ShortCard/>
           <div className='bg-slate-50 min-h-[80vh] pt-5'>
           <BlogSeactionOfHomePage/>
           </div>
        </div>
    );
};

export default HowOasisGlobalEducationHelpsYouPage;