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
import ModalOfstudyWork2 from '../../views/study-work-settle-japan/components/ModalOfstudyWork2';
import ModalOfstudyWork3 from '../../views/study-work-settle-japan/components/ModalOfstudyWork3';
import StepsCardForModal from './StepsCardForModal';
import { JapaneseLanguageProficiencyTes, studyAbroutProgram, WhoLearnJapaneseLanguage } from '../../utilities/study settle in japan category';
const Steps = () => {

    return (
        <div>
            {/* service card section */}
            <section className='py-16 bg-slate-100 mx-auto px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:px-20 pb-7 mx-auto max-w-7xl">
                    <div><ModalOfstudyWork modelContent={studyAbroutProgram} />
                        <label htmlFor="studyModal">
                            <StepsCardForModal imageURL={Img01} title='How To Pick Your Study-Abroad Program?'/>
                        </label>
                    </div>

                        <StepsCard imageURL={Img02} title='Why Is Japan a Good Choice for Studying Abroad' urlLink='/study-settle-japan/why-is-japan-a-good-choice-for-studying-abroad'/>
                        <StepsCard imageURL={Img03} title='Types Of Universities & Degrees in Japan' urlLink='/study-settle-japan/types-of-universities-degrees-in-japan'/>
                        <StepsCard imageURL={Img04} title='How Oasis Global Education Helps you' urlLink='/study-settle-japan/how-oasis-global-education-helps-you'/>

                    <div><ModalOfstudyWork2 modelContent={WhoLearnJapaneseLanguage} />
                        <label htmlFor="studyModal2">
                            <StepsCardForModal imageURL={Img05} title='Who Must Learn the Japanese Language?' />
                        </label>
                    </div>

                    <div><ModalOfstudyWork3 modelContent={JapaneseLanguageProficiencyTes} />
                        <label htmlFor="studyModal3">
                            <StepsCardForModal imageURL={Img06} title='The Japanese Language Proficiency Test (JLPT)' />
                        </label>
                    </div>
                        <StepsCard imageURL={Img07} title='What to do to Obtain a Residence Card' urlLink='/study-settle-japan/obtain-a-residence-card'/>
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