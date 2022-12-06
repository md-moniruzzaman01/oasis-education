import React, { useRef, useState } from 'react';
import HeaderOfPage from '../shared/HeaderOfPage';
import imgslide from '../../image/slide2.2.jpg'
import RegisterFrom from './components/From body';
export const multiFromContainer = React.createContext();
const RegisterPage = () => {
    const [currentContainer, setContainer] = useState(1)
    const [userData, setUserData] = useState([]);
    const form = useRef();
    return (
        <div>
             <HeaderOfPage img={imgslide}><h1>Register</h1></HeaderOfPage>
        
        <div className='min-h-screen py-20 px-4 bg-slate-100'>
            <multiFromContainer.Provider value={{ currentContainer, setContainer, userData, setUserData }}>
                <form ref={form} className='card flex-shrink-0 w-full max-w-3xl  bg-base-100 py-11 mx-auto'>
                    <div className="card-body"><RegisterFrom currentContainer={currentContainer}></RegisterFrom></div>
                </form>
            </multiFromContainer.Provider>
        </div>
        </div>
    );
};

export default RegisterPage;