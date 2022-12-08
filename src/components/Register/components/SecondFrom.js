import React, { useContext } from 'react';
import { multiFromContainer } from '..';

const SecondFrom = () => {
    const { setContainer, userData, setUserData } = useContext(multiFromContainer)
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text"  name="user_Name" value={userData["Name"]} onChange={(e) => setUserData({ ...userData, "Name": e.target.value })} placeholder="Type your name" className="input input-bordered" />
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Email *</span>
                </label>

                <input type="email" name='user_Email' value={userData["email"]} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} placeholder="Type You email address" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Phone *</span>
                </label>

                <input type="number"  name="user_phone" value={userData["phone"]} onChange={(e) => setUserData({ ...userData, "phone": e.target.value })} placeholder="Type You phone number" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Address *</span>
                </label>

                <input type="text"  name="user_Address" value={userData["address"]} onChange={(e) => setUserData({ ...userData, "address": e.target.value })} placeholder="Type You address" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Discribtions</span>
                </label>

                <textarea id="" cols="30" rows="4" name='user_Discribtions' placeholder="Type You email address" value={userData["discribtions"]} onChange={(e) => setUserData({ ...userData, "discribtions": e.target.value })} className="textarea textarea-bordered"></textarea>
            </div>


            <div>

                <input name="user_field" value={userData["field"]} onChange={(e) => setUserData({ ...userData, "field": e.target.value })} className="input input-bordered hidden" />
                <input name="user_Program" value={userData["program"]} onChange={(e) => setUserData({ ...userData, "program": e.target.value })} className="input input-bordered hidden" />


            </div>
            <div className="form-control flex-row justify-between mt-6">
                <button onClick={() => setContainer(1)} className="btn btn-secondary text-base-100">Back</button>
                <input  className="btn btn-secondary text-base-100" type="submit" value="Next" />

            </div>

        </div>
    );
};

export default SecondFrom;