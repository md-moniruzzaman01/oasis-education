import React, { useContext } from 'react';
import { multiFromContainer } from '../../Register';

const CongrassMessage = () => {
    const { setContainer} = useContext(multiFromContainer)
    return (
        <div className='flex items-center justify-center  h-44'>
            <div className='text-center space-y-1'>
            <h3 className="font-bold text-lg">Congratulations!</h3>
            <p className=""> we will get back to you soon</p>
            <div className='pt-5'>
            <button onClick={() => setContainer(1)} className="btn btn-secondary text-base-100">Back</button>
            </div>
            </div>
            
        </div>
    );
};

export default CongrassMessage;