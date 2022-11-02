import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarousolCard from './CarousolCard';

const Carosol = ({bannerURL}) => {
// const [Carousolitems, setCarousolitems]=useState([])
//   useEffect(() => {
//     fetch('http://localhost:5000/banner').then(data => data.json()).then(data => setCarousolitems(data[0]?.banner?.banner));
// }, [])
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
        <div>
        
        <Slider {...settings}>
            {
            bannerURL &&  bannerURL.map((item,index)=> <CarousolCard key={index} item={item}></CarousolCard>)  
            }
           
         
         
        </Slider>
      </div>
    );
};




export default Carosol;