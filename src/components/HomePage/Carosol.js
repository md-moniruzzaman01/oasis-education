import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarousolCard from './CarousolCard';
import HomepageIcon from './HomePageIcon';

const Carosol = () => {
  const [bannerURL, setBannerURL] = useState([])
  useEffect(() => {
    fetch('https://oasis-backend.onrender.com/api/v1/banner')
    .then(data => data.json()).
    then(data => setBannerURL(data.data[0].banner.banner));
  }, [])
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className='relative'>

      <Slider {...settings}>
        {
          bannerURL && bannerURL.map((item, index) => <CarousolCard key={index} item={item}></CarousolCard>)
        }



      </Slider>
      <HomepageIcon />
    </div>
  );
};




export default Carosol;