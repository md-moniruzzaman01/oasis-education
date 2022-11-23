import React from 'react';
import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
import TestimonialsImg from '../../image/Study-in-Our-Lady-of-Fatima-University-OLFU.jpg';
import TestimonialSection from './TestimonialSection';
const TestimonialsfullPage = () => {
    return (
        <div className='min-h-screen'>
            <HeaderOfPage img={TestimonialsImg}><h1>STUDY -WORK – SETTLE JAPAN</h1></HeaderOfPage>
            <Breadcrumbs pageName='Testimonials'/>
            <TestimonialSection/>
        </div>
    );
};

export default TestimonialsfullPage;