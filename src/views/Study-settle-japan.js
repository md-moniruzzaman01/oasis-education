import React from 'react';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import HeaderOfPage from '../components/shared/HeaderOfPage';
import Info from '../components/Study-work-settle-japan/Info'
import Steps from '../components/Study-work-settle-japan/Steps'
import bannerimg from '../image/slide2.2.jpg'
const StudySettleFullPage = () => {
    return (
        <div className='min-h-screen'>
            <HeaderOfPage img={bannerimg}><h1>STUDY -WORK – SETTLE JAPAN</h1></HeaderOfPage>
            <Breadcrumbs pageName='STUDY -WORK – SETTLE JAPAN'/>
            <Info/>
            <Steps/>
        </div>
    );
};

export default StudySettleFullPage;