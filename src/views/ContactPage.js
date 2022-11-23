import React from 'react';
import AddressArrea from '../components/Contact us/AddressArrea';
import MassageForm from '../components/Contact us/MassageForm';

const ContactPage = () => {
    return (
        <div>
      
        <div className='flex justify-center mt-20'>
          <div className='text-center max-w-3xl space-y-2 md:space-y-4 mx-4'>
            <h1 className='text-2xl md:text-4xl font-semibold'>We are always eager to hear from you!</h1>
            <p className='text-md md:text-xl'>We’re here to help and answer any question you might have. We look forward to hearing from you!</p>
          </div>
        </div>
        <div className='my-11'>
        </div>
        <div className="my-11 ">
            
          <div className="flex items-center  justify-center">

            {/* address container */}
          <div className='flex justify-around flex-col lg:flex-row-reverse w-11/12 max-w-5xl'>

          <div className=' flex justify-center items-center '><AddressArrea /></div>
            {/* form container */}
            
        <div>
        <h2 className='font-semibold my-11 text-md md:text-xl'>Fill the form below so we can get to know you and your needs better.</h2>
          <MassageForm />
          </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default ContactPage;