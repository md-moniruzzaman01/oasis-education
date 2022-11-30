import React from 'react';
import StepsCard from './StepsCard';
import Img01 from '../../image/requirement image/1-1.jpg'
import Img02 from '../../image/requirement image/2-1.jpg'
import Img03 from '../../image/requirement image/3-1.jpg'
import Img04 from '../../image/requirement image/4-1.jpg'
import Img05 from '../../image/requirement image/5-1.jpg'
import Img06 from '../../image/requirement image/6.png'
import Img07 from '../../image/requirement image/7.jpg'
import Img08 from '../../image/requirement image/8.png'
import Img09 from '../../image/requirement image/9.jpg'
import Img10 from '../../image/requirement image/10.jpg'
import Img11 from '../../image/requirement image/11.jpg'
import Img12 from '../../image/requirement image/12.png'
import ModalOfstudyWork from '../../views/study-work-settle-japan/components/ModalOfstudyWork';
import StepsCardForModal from './StepsCardForModal';
const Steps = () => {

    const studyAbroutProgram = {
        title: 'Your study abroud program',
        bodyPart01: 'It’s a far-away-from-home program and you would wish you could feel at home while you choose your country to study! The first thing on your list would be to research, learn, and research again the universities, programs, scholarships, fees, and the list goes on. But what is more important to consider would be the benefits that you can leverage out of your study-abroad program. Connecting with a program that interests you the most and has been linked to your studies so far would do the job. An alumni contact can aid you in their experiences. But there again is the strenuousness in culling between what is right and what is just an advertisement paradigm. So, it is always wise to connect to the consultant who excels in the respective business!',
        bodyPart02: 'In conjunction with the above, it is always wise to choose a country that excels in your area of interest, for your study abroad program and also with career opportunities and cost-effectiveness. Considering the major countries out there that offer international education programs, the Japanese education system is a top-drawer. Comparatively lower academic fees and generous scholarship programs are the major endearments. Unstinting and generous scholarships provided by the Japanese Government, the universities, corporations, as well as other organizations such as the Japan Student Services Organization (JASSO) lend a helping hand to back the living expenses of the student.'
    };
    const WhoLearnJapaneseLanguage = {
        title: 'Your study abroud program',
        bodyPart01: 'It’s a far-away-from-home program and you would wish you could feel at home while you choose your country to study! The first thing on your list would be to research, learn, and research again the universities, programs, scholarships, fees, and the list goes on. But what is more important to consider would be the benefits that you can leverage out of your study-abroad program. Connecting with a program that interests you the most and has been linked to your studies so far would do the job. An alumni contact can aid you in their experiences. But there again is the strenuousness in culling between what is right and what is just an advertisement paradigm. So, it is always wise to connect to the consultant who excels in the respective business!',
        bodyPart02: 'In conjunction with the above, it is always wise to choose a country that excels in your area of interest, for your study abroad program and also with career opportunities and cost-effectiveness. Considering the major countries out there that offer international education programs, the Japanese education system is a top-drawer. Comparatively lower academic fees and generous scholarship programs are the major endearments. Unstinting and generous scholarships provided by the Japanese Government, the universities, corporations, as well as other organizations such as the Japan Student Services Organization (JASSO) lend a helping hand to back the living expenses of the student.'
    };
    const JapaneseLanguageProficiencyTes = {
        title: 'Your study abroud program',
        bodyPart01: 'It’s a far-away-from-home program and you would wish you could feel at home while you choose your country to study! The first thing on your list would be to research, learn, and research again the universities, programs, scholarships, fees, and the list goes on. But what is more important to consider would be the benefits that you can leverage out of your study-abroad program. Connecting with a program that interests you the most and has been linked to your studies so far would do the job. An alumni contact can aid you in their experiences. But there again is the strenuousness in culling between what is right and what is just an advertisement paradigm. So, it is always wise to connect to the consultant who excels in the respective business!',
        bodyPart02: 'In conjunction with the above, it is always wise to choose a country that excels in your area of interest, for your study abroad program and also with career opportunities and cost-effectiveness. Considering the major countries out there that offer international education programs, the Japanese education system is a top-drawer. Comparatively lower academic fees and generous scholarship programs are the major endearments. Unstinting and generous scholarships provided by the Japanese Government, the universities, corporations, as well as other organizations such as the Japan Student Services Organization (JASSO) lend a helping hand to back the living expenses of the student.'
    };
    return (
        <div>
            {/* service card section */}
            <section className='py-16 bg-slate-100 mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-5 md:px-20 pb-7 mx-auto max-w-7xl">
                    <div><ModalOfstudyWork modelContent={studyAbroutProgram} />
                        <label htmlFor="studyModal">
                            <StepsCardForModal imageURL={Img01} title='How To Pick Your Study-Abroad Program?'/>
                        </label>
                    </div>

                        <StepsCard imageURL={Img02} title='Why Is Japan a Good Choice for Studying Abroad' urlLink='/study-settle-japan/why-is-japan-a-good-choice-for-studying-abroad'/>
                        <StepsCard imageURL={Img03} title='Types Of Universities & Degrees in Japan' urlLink='/study-settle-japan/types-of-universities-degrees-in-japan'/>
                        <StepsCard imageURL={Img04} title='How Oasis Global Education Helps you' urlLink='/study-settle-japan/how-oasis-global-education-helps-you'/>

                    <div><ModalOfstudyWork modelContent={WhoLearnJapaneseLanguage} />
                        <label htmlFor="studyModal">
                            <StepsCardForModal imageURL={Img05} title='Who Must Learn the Japanese Language?' />
                        </label>
                    </div>

                    <div><ModalOfstudyWork modelContent={JapaneseLanguageProficiencyTes} />
                        <label htmlFor="studyModal">
                            <StepsCardForModal imageURL={Img06} title='The Japanese Language Proficiency Test (JLPT)' />
                        </label>
                    </div>
                        <StepsCard imageURL={Img07} title='What to do to Obtain a Residence Card' urlLink='/study-settle-japan/how-oasis-global-education-helps-you'/>
                        <StepsCard imageURL={Img08} title='Documentation Required from Students' urlLink='/study-settle-japan/documentation-required-from-students'/>
                        <StepsCard imageURL={Img09} title='Important Points to Know' urlLink='/study-settle-japan/important-points-to-know'/>
                        <StepsCard imageURL={Img10} title='Frequently Asked Questions' urlLink='/study-settle-japan/frequently-asked-questions'/>
                        <StepsCard imageURL={Img11} title='Hand Book' urlLink=''/>
                        <StepsCard imageURL={Img12} title='Apply Now' urlLink='/contact'/>

                </div>

            </section>
        </div>
    );
};

export default Steps;