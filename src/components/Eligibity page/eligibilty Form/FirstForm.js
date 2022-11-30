import React, { useContext } from 'react';
import { multiFromContainer } from '../../Register';

const FirstForm = () => {
    const { setContainer, userData, setUserData } = useContext(multiFromContainer)
    const disablebtn = userData["Industry"]
    return (
        
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Select Your Field</span>
                </label>

                <select id="Industry" name="Industry" value={userData["Industry"]} onChange={(e) => setUserData({ ...userData, "Industry": e.target.value })} className="input input-bordered" >
                    <option disabled selected >Choose Your Field</option>
                    <option value="Building and Construction" >Building and Construction</option >
                    <option value="Aged Care">Aged Care</option>
                    <option value="Commercial Cookery & Hospitality">Commercial Cookery & Hospitality</option>
                    <option value="Business">Business</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Training and Assessment">Training and Assessment</option>
                    <option value="Childcare Services">Childcare Services</option>
                    <option value="Community Services">Community Services</option>
                    <option value="Beauty and Hairdressing">Beauty and Hairdressing</option>
                    <option value="Baking">Baking</option>
                    <option value="Leadership & Management">Leadership & Management</option>
                    
                    <option value="Engineering">Engineering</option>
                </select>
            </div>
            <div className="form-control flex-row justify-end mt-6">
                {<button onClick={() => setContainer(2)} disabled={disablebtn ? false : true} className="btn btn-secondary text-base-100">Next</button>}

            </div>
        </div>
    );
};

export default FirstForm;