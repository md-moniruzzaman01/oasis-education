import React from 'react';
import slide1 from '../../image/headerImag.jpg'
import { CardContaintOfImportentThink } from '../../utilities/Important Points to know/CardContaintOfImportentThink';
import BlogSeactionOfHomePage from '../HomePage/Blog';
import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
const ImportantPointsToKnowPage = () => {
    return (
        <div>
            <HeaderOfPage img={slide1}><h1>DOCUMENTATION REQUIRED FROM STUDENTS</h1></HeaderOfPage>
            <Breadcrumbs pageName='Documentation Required From Students' />
            <div className='bg-primary min-h-screen py-20 text-base-100'>
                <h1 className='text-3xl font-bold text-center pb-11'>REQUIREMENTS AND DOCUMENTS NEEDED FOR STUDENTS</h1>
                <div className='max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {CardContaintOfImportentThink && CardContaintOfImportentThink.map((data, i) => <div key={i}>
                        <div className="card mx-auto programs-card border-2 rounded-none">
                            <div className="card-body p-4 text-center py-7">
                                <p className='text-sm'>{data?.discribtion}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='bg-slate-50 min-h-[80vh] pt-5'>
                <BlogSeactionOfHomePage />
            </div>
        </div>
    );
};

export default ImportantPointsToKnowPage;