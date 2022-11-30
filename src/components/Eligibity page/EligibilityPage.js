import React, { useContext } from 'react';

import FirstForm from './eligibilty Form/FirstForm';
import SecondFrom from './eligibilty Form/SecondFrom';
import FinalFrom from './eligibilty Form/FinalFrom';
import CongrassMessage from './eligibilty Form/CongrassMessage';
import ThirdFrom from './eligibilty Form/ThirdFrom';
import { multiFromContainer } from '../Register';
const EligibilityPage = () => {

    const {currentContainer}= useContext(multiFromContainer)
               
    
    function showContainer(containerNumber){
        switch(containerNumber){
            case 1 :
                return <FirstForm/>
            case 2 :
                return <SecondFrom/>
            case 3 :
                return <ThirdFrom/>
            case 4 :
                return <FinalFrom/>
            case 5 :
                return <CongrassMessage/>
           
        }
    }
    return (
        <div>
            
          
          {showContainer(currentContainer)}
        </div>
    );
};

export default EligibilityPage;