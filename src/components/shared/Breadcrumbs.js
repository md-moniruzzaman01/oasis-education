import React from 'react';

const Breadcrumbs = ({pageName}) => {
    return (
       <div className='bg-slate-50'>
         <div className="text-sm breadcrumbs py-7 mx-7">
            <ul>
                <li><a>Home</a></li>
                <li><a>{pageName}</a></li>
            </ul>
        </div>
       </div>
    );
};

export default Breadcrumbs;