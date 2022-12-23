import React from 'react';
import slide1 from '../../image/questions and answare slide.jpg'
import BlogSeactionOfHomePage from '../HomePage/Blog';
import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
import FirstQuestions from './components/FirstQuestions';
import ForthQuestions from './components/ForthQuestions';
import SecondQuestions from './components/secondQuestions';
import TheirdQuestions from './components/TheirdQuestions';
const FrequentlyAskedQuestionsPage = () => {
    return (
        <div>
           <HeaderOfPage img={slide1}><h1>FREQUENTLY ASKED QUESTIONS</h1></HeaderOfPage>
            <Breadcrumbs pageName='Frequently Asked Questions' />
            <div className='min-h-screen py-20 '>
                <h1 className=' text-2xl md:text-3xl font-bold text-center py-4'>REQUIREMENTS AND DOCUMENTS NEEDED FOR STUDENTS</h1>
                <p className='text-gray-700 text-center'>Answer all of your questions</p>
             <FirstQuestions/>
             <SecondQuestions/>
             <TheirdQuestions/>
             <ForthQuestions/>
            </div>
            <div className='bg-slate-50 min-h-[80vh] pt-5'>
                <BlogSeactionOfHomePage />
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestionsPage;