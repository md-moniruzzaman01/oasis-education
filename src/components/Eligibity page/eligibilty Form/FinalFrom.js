import React, { useContext } from 'react';
import { multiFromContainer } from '../../Register';
// import PhoneInput from 'react-phone-input-2'
const FinalFrom = () => {
    const { setContainer, userData, setUserData } = useContext(multiFromContainer);
    const disablebtn = userData["phone"]
    return (
        <div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" name='user_Name' placeholder="Type your name" value={userData["firstName"]} onChange={(e) => setUserData({ ...userData, "firstName": e.target.value })} className="input input-bordered" />
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Email *</span>
                </label>

                <input type="email" name='user_email' placeholder="Type You email address" value={userData["email"]} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} className="input input-bordered" required />
            </div>
            <div className="form-control  ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Please Select Your State</span>
                    </label>

                    <select id="state" name="state" className="input input-bordered" required>
                        <option value="">Choose You state</option>
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
                <label className="label">
                    <span className="label-text font-semibold">Phone Number *</span>
                </label>
                {/* <PhoneInput
                    country={'au'}
                    
                    inputStyle={{width:"100%", height:"3rem"}}
                    value={userData["phone"]}
                    onBlur={(e) => setUserData({ ...userData, "phone": e.target.value })}
                   
                /> */}

            </div>
            <div className="form-control  ">
                <label className="label">
                    <span className="label-text font-semibold">Your Message</span>
                </label>

                <textarea name='message' className="textarea textarea-bordered h-24" value={userData["massage"]} onChange={(e) => setUserData({ ...userData, "massage": e.target.value })} placeholder="massage here..."></textarea>
            </div>

            <div>

                <input name="Industry" value={userData["Industry"]} onChange={(e) => setUserData({ ...userData, "Industry": e.target.value })} className="input input-bordered hidden" />
                <input name="evidence" value={userData["evidence"]} onChange={(e) => setUserData({ ...userData, "evidence": e.target.value })} className="input input-bordered hidden" />
                <input name="user_qualification" value={userData["qualification"]} onChange={(e) => setUserData({ ...userData, "qualification": e.target.value })} className="input input-bordered hidden" />
                <input name='user_experience' value={userData["experience"]} onChange={(e) => setUserData({ ...userData, "experience": e.target.value })} className="input input-bordered  hidden" />
                <input name='user_Onshore' value={userData["Onshore"]} onChange={(e) => setUserData({ ...userData, "Onshore": e.target.value })} className="input input-bordered  hidden" />
                <input name='purpose' value={userData["purpose"]} onChange={(e) => setUserData({ ...userData, "purpose": e.target.value })} className="input input-bordered  hidden" />
                <input name='Location' value={userData["Location"]} onChange={(e) => setUserData({ ...userData, "Location": e.target.value })} className="input input-bordered  hidden" />
                <input name='user_phone' value={userData["phone"]} onChange={(e) => setUserData({ ...userData, "phone": e.target.value })} className="input input-bordered  hidden" />




            </div>


            <div className="form-control flex-row justify-between mt-6">
                <button onClick={() => setContainer(3)} className="btn btn-secondary text-base-100">Back</button>
                <input type="submit" disabled={disablebtn? false:true} className="btn btn-secondary text-base-100" value="Submit" />
                {/* <button onClick={()=>submitData()} className="btn btn-secondary text-base-100">Submit</button> */}
            </div>
        </div>
    );
};

export default FinalFrom;