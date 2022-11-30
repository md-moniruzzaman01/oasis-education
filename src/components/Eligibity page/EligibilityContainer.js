import React, { useRef, useState } from 'react';
export const multiFromContainer = React.createContext();
import EligibilityPage from './EligibilityPage';
const EligibilityContainer = () => {


        const [currentContainer, setContainer] = useState(1)
        const [userData, setUserData] = useState([]);
    
    
        const form = useRef();


    return (
        <div>
            <multiFromContainer.Provider value={{ currentContainer, setContainer, userData, setUserData}}>
                <form ref={form}>

                    <EligibilityPage></EligibilityPage>
                </form>
            </multiFromContainer.Provider>

        </div>
    );
};

export default EligibilityContainer;