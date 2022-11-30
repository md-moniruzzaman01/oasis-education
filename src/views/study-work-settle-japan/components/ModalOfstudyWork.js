import React from 'react';

const ModalOfstudyWork = ({modelContent}) => {
    return (
        <div>
            <input type="checkbox" id="studyModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{modelContent?.title}</h3>
                    <p className="py-4">{modelContent?.bodyPart01}</p>
                    <p className="py-4">{modelContent?.bodyPart02}</p>
                    <div className="modal-action">
                        <label htmlFor="studyModal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOfstudyWork;