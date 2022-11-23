import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import PartnerCard from './PartnerCard';
import { PartnerImage } from '../../utilities/About us/PartnerImage';
const PartnerSlide = () => {
  const partners = PartnerImage;
    return (
        <div className='max-w-6xl mx-auto mb-11'>
             <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
{partners.map((pt,i)=> <SwiperSlide key={i}><PartnerCard img={pt.partnerimg}/></SwiperSlide>)}
      </Swiper>
    </>
        </div>
    );
};

export default PartnerSlide;