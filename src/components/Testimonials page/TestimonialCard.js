import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className='h-52'>
            <iframe className='h-full w-full' src={`https://www.youtube.com/embed/${testimonial.banner.slice(17,30)}`} title="YouTube video player" frameBorder="0" aframeborder="0" allowFullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    );
};

export default TestimonialCard;