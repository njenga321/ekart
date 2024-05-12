import React from 'react';
import './HeroSwiper.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderWrapper from "./SlickSliderStyle";

function HeroSwiper({ imgCategory }) {

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (
    <div className='main-slider-wrapper'>
      <SliderWrapper>
        <Slider {...settings}>
          {imgCategory.map((image, index) => (
            <div className='hero-image-slider' key={index}>
              <img src={image.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default HeroSwiper;
