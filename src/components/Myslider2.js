import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { homeimg1,homeimg2, homeimg3, homeimg4, homeimg5, homeimg6 } from './AllImages';

const Myslider2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1 ,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='m-5'>

    <Slider {...settings}>
        <div className=''>
          <img src={homeimg1} width={1350} alt="Slide 1" />
        </div>
        <div>
          <img src={homeimg2} width={1350} alt="Slide 2" />
        </div>
        <div>
          <img src={homeimg3} width={1350} alt="Slide 3" />
        </div>
        <div>
          <img src={homeimg4} width={1350} alt="Slide 3" />
        </div>
        <div>
          <img src={homeimg5} width={1350} alt="Slide 3" />
        </div>
        <div>
          <img src={homeimg6} width={1350} alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>

    </div>
  )
}

export default Myslider2