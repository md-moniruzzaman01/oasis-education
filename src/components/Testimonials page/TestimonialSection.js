import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
    // https://oasis-backend.onrender.com/api/v1/testimonial
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://oasis-backend.onrender.com/api/v1/testimonial').then(res=>res.json()).then(data=>setData(data.data[0].testimonial.testimonial))
    },[])
    return (
        <div>
           <section className='py-7 mx-auto'>
            <h1 className='text-center text-3xl font-bold my-9 text-primary'>WHAT OLFU STUDENTS & FORMER STUDENTS SAYS</h1>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 md:px-20 pb-7  mx-auto max-w-7xl">
                    {data && data.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}/>)}
                </div>

            </section>
        </div>
    );
};

export default TestimonialSection;