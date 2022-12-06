import React, { useContext } from 'react';
import { multiFromContainer } from '..';

const FirstForm = () => {
    const { setContainer} = useContext(multiFromContainer)
    return (
        <div>
                  <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" name='user_Name' placeholder="Type your name" className="input input-bordered" />
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Email *</span>
                </label>

                <input type="email" name='user_email' placeholder="Type You email address"  className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Your Phone *</span>
                </label>

                <input type="number" name='user_phone' placeholder="Type You phone number"  className="input input-bordered" required />
            </div>
            <div className="form-control  ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Please Select Your Program</span>
                    </label>

                    <select id="state" name="state" className="input input-bordered" required>
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

            </div>

            <button onClick={() => setContainer(2)} className="btn btn-secondary text-base-100">Back</button>
        </div>
    );
};

export default FirstForm;