import React from 'react';
import { GoLocation } from "react-icons/go";
import { BsTelephone ,BsClock } from "react-icons/bs";
const AddressArrea = () => {
    return (
        <div className="text-center lg:text-left w-full mt-20 space-y-9">
            <div>
              <h1 className="font-bold text-xl flex items-center justify-center md:justify-start"><span className='mr-2'><GoLocation/></span> Address</h1>
                <p className="py-2">Suite 11, 41 Rickard Road, Bankstown, NSW-1000</p>
            </div>
            <div>
                <h1 className="text-xl font-bold flex items-center justify-center md:justify-start"><span className='mr-2'><BsTelephone/></span>Contact Info</h1>
                <p className="py-2">Call Us: +61 422 528 597</p>
                <span className="block">Email: dev.moniruzzaman@gmail.com</span>
            </div>
            <div>
                <h1 className="text-xl font-bold flex items-center justify-center md:justify-start"><span className='mr-2'><BsClock/></span>Hour of Operation</h1>
                <p className="py-2">Monday - Friday: 10:00am - 06:00pm
                  </p>
            </div>
        </div>
    );
};

export default AddressArrea;