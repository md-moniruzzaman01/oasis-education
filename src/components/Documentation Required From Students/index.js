import React from 'react';
import BlogSeactionOfHomePage from '../HomePage/Blog';

import Breadcrumbs from '../shared/Breadcrumbs';
import HeaderOfPage from '../shared/HeaderOfPage';
import slide1 from '../../image/headerImag.jpg'
import { RequirementforStudentContaint } from '../../utilities/Documentation Required From Students/RequirementforStudentContaint';
import Card from './components/Card';
const DocumentationRequiredFromStudentsPage = () => {
    return (
        <div>
            <HeaderOfPage img={slide1}><h1>DOCUMENTATION REQUIRED FROM STUDENTS</h1></HeaderOfPage>
            <Breadcrumbs pageName='Documentation Required From Students' />
            <div className='bg-primary min-h-screen py-20 text-base-100'>
                <h1 className='text-3xl font-bold text-center pb-11'>REQUIREMENTS AND DOCUMENTS NEEDED FOR STUDENTS</h1>
                <div className='max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                    {RequirementforStudentContaint && RequirementforStudentContaint.map((data,i)=> <Card key={i} data={data}/>)}
                </div>
            </div>
            <div className='bg-slate-50 min-h-[80vh] pt-5'>
                <BlogSeactionOfHomePage />
            </div>
        </div>
    );
};

export default DocumentationRequiredFromStudentsPage;