import React, {useContext} from 'react';
import { multiFromContainer } from '../../Register';

// import catagoryData from "../../Json/catagoryData.json"
const SecondFrom = () => {
    const {setContainer,userData,setUserData}= useContext(multiFromContainer)

// const Building = <>
//                     <option value="CPC30220 - Certificate III in Carpentry" >CPC30220 - Certificate III in Carpentry</option >
//                     <option value="CPC30620 - Certificate III in Painting and Decorating" >CPC30620 - Certificate III in Painting and Decorating</option >
//                     <option value="CPC33020 - Certificate III in Bricklaying and Blocklaying" >CPC33020 - Certificate III in Bricklaying and Blocklaying</option >
//                     <option value="CPC40120 - Certificate IV in Building and Construction" >CPC40120 - Certificate IV in Building and Construction</option >
//                     <option value="CPC50220 - Diploma of Building and Construction (Building)" >CPC50220 - Diploma of Building and Construction (Building)</option >
//                     <option value="CPC50320 - Diploma of Building and Construction (Management)" >CPC50320 - Diploma of Building and Construction (Management)</option >
//                     <option value="CPC30320 - Certificate III in Concreting" >CPC30320 - Certificate III in Painting and Decorating</option >
//                     <option value="CPC31420 - Certificate III in Construction Waterproofing" >CPC31420 - Certificate III in Construction Waterproofing</option >
//                     <option value="CPC31220 - Diploma" >CPC31220 - Certificate III in Wall and Ceiling Lining</option >
//                     <option value="CPC31320 - Certificate III in Wall and Floor Tiling" >CPC31320 - Certificate III in Wall and Floor Tiling</option >
//                     <option value="CPC30120 - Certificate III in Shopfitting" >CPC30120 - Certificate III in Shopfitting</option >
//                     <option value="CPC41020 - Certificate IV in Demolition" >CPC41020 - Certificate IV in Demolition</option >
//                     <option value="CPC32420 - Certificate III in Plumbing" >CPC32420 - Certificate III in Plumbing</option >
//                     <option value="CPC32620 - Certificate III in Roof Plumbing" >CPC - Certificate III in Roof Plumbing</option >
//                     <option value="MSF30422 - Certificate III in Glass and Glazing" >CPC - Certificate III in Glass and Glazing</option >
//                     <option value="MEM30219 - Certificate III in Engineering - Mechanical Trade" >MEM30219 - Certificate III in Engineering - Mechanical Trade</option >
//                     <option value="MEM30319 - Certificate III in Engineering - Fabrication Trade" >MEM30319 - Certificate III in Engineering - Fabrication Trade</option >
//                     {/* <option value="CPC - Diploma" >CPC - Certificate</option > */}

//                 </>
// const AgedCare = <>
//                      <option value="CHC33015 - Certificate III in Individual Support" >CHC33015 - Certificate III in Individual Support</option >
//                      <option value="CHC43015 - Certificate IV in Ageing Support" >CHC43015 - Certificate IV in Ageing Support</option >
//                      <option value="CHC43115 - Certificate IV in Disability" >CHC43115 - Certificate IV in Disability</option >
//                 </>


// const subServiceData = catagoryData

// const filterData =  subServiceData.filter(dt => dt.title ==  userData.Industry)
// const findSubCetagoryTitile =  filterData[0]?.subcetagories
// const options = findSubCetagoryTitile && findSubCetagoryTitile.map((dt,index)=> <option key={index} value={dt.subtitile}>{dt.subtitile}</option>)
 
const disablebtn = userData["qualification"]  && userData["Onshore"]    
                    
                    

    return (
        <div>
            
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Select Your field </span>
                </label>

                <select id="Industry" name="Industry" value={userData["Industry"]} onChange={(e)=> setUserData({...userData, "Industry":e.target.value })} className="input input-bordered" >
                    <option disabled selected >Choose You field</option>
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
                    <option value="Project Management">Project Management</option>
                    <option value="Engineering">Engineering</option>
                </select>
            </div>




            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Please Select Your Qualification *</span>
                </label>

                <select id="qualification" name="user_qualification" value={userData["qualification"]} onChange={(e)=> setUserData({...userData, "qualification":e.target.value })} className="input input-bordered" >
                <option disabled  selected>Select Your Qualification</option>
                    {/* {options} */}
                </select>
            </div>
            {/* <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Are You From Onshore/Offshore? *</span>
                </label>

                <select id="Onshore" name="user_Onshore" value={userData["Onshore"]} onChange={(e)=> setUserData({...userData, "Onshore":e.target.value })} className="input input-bordered" >
                <option disabled  selected>Select Your Onshore or Offshore</option>
                <option value="Onshore">Onshore</option>
                <option value="Offshore">Offshore</option>
                </select>
            </div> */}
          
            <div className="form-control flex-row justify-between mt-6">
                <button onClick={()=> setContainer(1)} className="btn btn-secondary text-base-100">Back</button>
                <button onClick={()=> setContainer(3)} disabled={disablebtn? false:true} className="btn btn-secondary text-base-100">Next</button>
            </div>
        </div>
    );
};

export default SecondFrom;