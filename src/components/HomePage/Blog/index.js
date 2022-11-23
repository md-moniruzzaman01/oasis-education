import React from 'react';
import BlogCard from './BlogCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const BlogSeactionOfHomePage = ({posts}) => {
    return (
        <div className='max-w-6xl mx-auto my-11'>
           <h1 className='text-center text-4xl font-semibold border-b container mb-4 pb-4 mx-auto'>Our Latest News </h1>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
         {posts.map((bd, i)=>  <SwiperSlide key= {i}><BlogCard  blogdata={bd}></BlogCard></SwiperSlide>)}
      </Swiper>

     
    </div>
    );
};

export default BlogSeactionOfHomePage;