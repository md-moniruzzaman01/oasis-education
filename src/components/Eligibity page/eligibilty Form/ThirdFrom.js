import React, { useContext } from 'react';
import { multiFromContainer } from '../EligibilityContainer';

const ThirdFrom = () => {
    const { setContainer, userData, setUserData} = useContext(multiFromContainer)
    const disablebtn = userData["evidence"] &&  userData["experience"] && userData["Location"]
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">How many years of work exprerience do you have *</span>
                </label>

                <input type="number" placeholder="Enter your experience year" name='user_experience' value={userData["experience"]} onChange={(e) => setUserData({ ...userData, "experience": e.target.value })} className="input input-bordered" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Work Location *</span>
                </label>

                <select id="Location" name="Location" value={userData["Location"]} onChange={(e)=> setUserData({...userData, "Location":e.target.value })} className="input input-bordered" >
                    <option disabled selected>Select Evidence Of This Experience</option>
                    <option value="Australia" >Australia</option >
                    <option value="Overseas">Overseas</option>
                    <option value="Both Australia & Overseas">Both Australia & Overseas</option>
                    
                </select>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold" >Can You Provide Evidence Of This Experience? *</span>
                </label>

                <select id="evidence" name="evidence" value={userData["evidence"]} onChange={(e)=> setUserData({...userData, "evidence":e.target.value })} className="input input-bordered" >
                    <option disabled selected>Select Evidence Of This Experience</option>
                    <option value="yes" >Yes</option >
                    <option value="no">No</option>
                    
                </select>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold" >What is your purpose to get qualified with RPL?</span>
                </label>

                <select id="purpose" name="purpose" value={userData["purpose"]} onChange={(e)=> setUserData({...userData, "purpose":e.target.value })} className="input input-bordered" >
                    <option disabled selected>Select your  purpose</option>
                    <option value="Migration" >Migration</option >
                    <option value="Getting a job">Getting a job</option>
                    <option value="Business">Business</option>
                    <option value="License">License</option>
                    <option value="Job promotion">Job promotion</option>
                    <option value="other">other</option>
                    
                </select>
            </div>
            <div className="form-control flex-row justify-between mt-6">
                <button onClick={()=> setContainer(2)} className="btn btn-secondary text-base-100">Back</button>
                <button onClick={()=> setContainer(4)} disabled={disablebtn? false:true} className="btn btn-secondary text-base-100">Next</button>
            </div>
        </div>
    );
};

export default ThirdFrom;