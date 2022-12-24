import React, { useEffect, useState } from 'react';
import Card from './Card';

const LatestBlog = () => {
    const [latestblog, setLatestblog] = useState([])
    useEffect(() => {
        fetch('https://oasis-backend.onrender.com/api/v1/blogs/recommended', {})
            .then((res) => res.json())
            .then(data => {
                setLatestblog(data.data)
            })
    }, [])
    return (
        <div className='my-11'>
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold'>Popular blogs</h1>
                <p className='ml-2 w-6/12 border-b-2 border-red-400'></p>
            </div>
            <div className='p-0 md:p-4'>
                {latestblog && latestblog.map(data => <Card key={data._id} data={data}/>)}
            </div>
        </div>
    );
};

export default LatestBlog;