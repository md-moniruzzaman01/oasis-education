import React from 'react';
import { commemts } from '../../../utilities/Home/Commemts';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import CommenetCard from './CommenetCard';
const CommentsSection = () => {
    const data = commemts;
    return (
        <div className=' comment-bg '>
            <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((dt, i) => <SwiperSlide key={i} ><CommenetCard data={dt} /></SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default CommentsSection;