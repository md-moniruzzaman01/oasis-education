import React from 'react';
import CongrassMessage from '../CongrassMessage';
import FirstForm from '../FirstForm';
import SecondFrom from '../SecondFrom';

const RegisterFrom = ({currentContainer}) => {
    function showContainer(containerNumber){
        switch(containerNumber){
            case 1 : 
                return <FirstForm/>
            case 2 :
                return <SecondFrom/>
            case 3 :
                return <CongrassMessage/>
           
        }
    }
    return (
        <div>
            
          
          {showContainer(currentContainer)}
        </div>
    );
};

export default RegisterFrom;