import React, { useContext } from 'react';
import { multiFromContainer } from '..';

const FirstForm = () => {
    const { setContainer,userData,setUserData} = useContext(multiFromContainer);
    const disablebtn = userData["field"]  && userData["field"] 
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Please Select Your Feild</span>
                </label>
                <input type="text"  name="user_field" value={userData["field"]} onChange={(e) => setUserData({ ...userData, "field": e.target.value })} placeholder="Type your feild" className="input input-bordered" />
            </div>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Please Select Your Program</span>
                    </label>

                    <select  name="user_Program" value={userData["program"]} onChange={(e)=> setUserData({...userData, "program":e.target.value })} className="input input-bordered" required>
                        <option value="">Choose Program</option>
                        <option value="NSW" >NSW</option >
                        <option value="ACT">ACT</option>
                        <option value="QLD">QLD</option>
                        <option value="VIC">VIC</option>
                        <option value="TAS">TAS</option>
                        <option value="WA">WA</option>
                        <option value="NT">NT</option>
                        <option value="SA">SA</option>
                    </select>
                </div>

            <div className="form-control flex-row justify-end mt-6">
                {<button onClick={() => setContainer(2)}  disabled={disablebtn? false:true} className="btn btn-secondary text-base-100">Next</button>}

            </div>
        </div>
    );
};

export default FirstForm;