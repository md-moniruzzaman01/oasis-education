import React from 'react';

const Tags = () => {
    return (
        <div>
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold'>Tag Cloud</h1>
                <p className='ml-2 w-6/12 border-b-2 border-red-400'></p>
            </div>
            <div className='flex flex-wrap'>
                <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#Blogs</p>
                <p className='px-4 py-2 rounded text-gray-700 font-semibold shadow m-2'>#News</p>
            </div>
        </div>
    );
};

export default Tags;