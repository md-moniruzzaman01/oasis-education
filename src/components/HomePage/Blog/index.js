import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import BlogSectionCard from './BlogSectionCard';
const BlogSeactionOfHomePage = () => {
  const [BlogData,setBlogData]=useState([])
  useEffect(()=>{
    fetch('https://oasis-backend.onrender.com/api/v1/blogs/news?limit=10',{})
    .then(res=>res.json())
    .then(data=> {
      setBlogData(data.data);
    })
  },[])
    return (
        <div className='max-w-6xl mx-auto my-11'>
           <h1 className='text-center text-4xl font-semibold border-b container mb-4 pb-4 mx-auto'>Our Latest News </h1>
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
         {BlogData.map((bd, i)=>  <SwiperSlide key= {i}><BlogSectionCard  blogdata={bd}></BlogSectionCard></SwiperSlide>)}
      </Swiper>

     
    </div>
    );
};

export default BlogSeactionOfHomePage;