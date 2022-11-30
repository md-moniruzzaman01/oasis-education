import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import RelatedBlogCard from './RelatedBlogCard';
const RelatedPosts = () => {
    const [BlogData,setBlogData]=useState([])
    useEffect(()=>{
      fetch('https://oasis-backend.onrender.com/blog',{})
      .then(res=>res.json())
      .then(data=> {
        setBlogData(data);
      })
    },[])
    return (
        <div className=''>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
         {BlogData.map((bd, i)=>  <SwiperSlide key= {i}><RelatedBlogCard bd={bd}/></SwiperSlide>)}
      </Swiper>
        </div>
    );
};

export default RelatedPosts;