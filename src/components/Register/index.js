import React, { useRef, useState } from 'react';
import HeaderOfPage from '../shared/HeaderOfPage';
import imgslide from '../../image/slide2.2.jpg'
import RegisterFrom from './components/From body';
export const multiFromContainer = React.createContext();
const RegisterPage = () => {
    const [currentContainer, setContainer] = useState(1)
    const [userData, setUserData] = useState([]);
    const form = useRef();
  const submitData =(e)=>{
    e.preventDefault();
    const field = e.target.user_field.value;
    const program = e.target.user_Program.value;
    const name = e.target.user_Name.value;
    const email = e.target.user_Email.value;
    const phone = e.target.user_phone.value;
    const address = e.target.user_Address.value;
    const data = {field,program,name,email,phone,address};
    fetch('http://localhost:5000/api/v1/register',{
     method: 'POST',
     headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then((data) => {
        if (data.data?.acknowledged) {
            e.target.reset();
            setContainer(3)
        } else{
            console.log(data);
        }
    })
  }
    return (
        <div>
             <HeaderOfPage img={imgslide}><h1>Register</h1></HeaderOfPage>
        
        <div className='min-h-screen py-20 px-4 bg-slate-100'>
            <multiFromContainer.Provider value={{ currentContainer, setContainer, userData, setUserData }}>
            <form ref={form} onSubmit={submitData} className='card flex-shrink-0 w-full max-w-3xl  bg-base-100 py-11 mx-auto'>
                    <div className="card-body">
                        <RegisterFrom currentContainer={currentContainer}></RegisterFrom>
                        </div>
                </form>
            </multiFromContainer.Provider>
        </div>
        </div>
    );
};

export default RegisterPage;