import React, { useContext } from 'react';
import { multiFromContainer } from '..';

const SecondFrom = () => {
    const { setContainer} = useContext(multiFromContainer)
    return (
        <div>
            hello again
            <button onClick={() => setContainer(3)} className="btn btn-secondary text-base-100">Back</button>
        </div>
    );
};

export default SecondFrom;