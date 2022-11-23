import React from 'react';

const MassageForm = () => {
    return (
        <form >
        <div className="card  border flex-shrink-0 w-92 md:w-full  max-w-lg  bg-base-100 mx-auto px-0">
            <div className="card-body px-4">

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" name="user_number" id='number'  placeholder="Enter your phone number"  className="input input-bordered"  />
                   

                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Enter Your email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Massage</span>
                    </label>
                    <textarea name="message" className="textarea textarea-bordered" placeholder="Type your massage here.." required></textarea>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-secondary text-white" type="submit" value="Send" />
                </div>
            </div>
        </div>
    </form>
    );
};

export default MassageForm;