import React from 'react';
import './ServiceFeatures.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-alice-carousel/lib/alice-carousel.css";


const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
};
    
const items = [
    <div className='d-flex align-items-center gap-15 '>
        <img src='https://i.postimg.cc/rpJSrj2J/service.png' alt='services' />
        <div>
            <h6>Free Shipping</h6>
            <p className='mb-0'>For orders over $100</p>
        </div>
    </div>,

    <div className='d-flex align-items-center gap-15'>
        <img src='https://i.postimg.cc/ncyYbM1v/service-02.png' alt='services' />
        <div>
            <h6>Daily Surprise Offers</h6>
            <p className='mb-0'>Save upto 30% off</p>
        </div>
    </div>,

    <div className='d-flex align-items-center gap-15'>
        <img src='https://i.postimg.cc/fRY7wZH1/service-03.png' alt='services' />
        <div>
            <h6>Support 24/7</h6>
            <p className='mb-0'>Shop with an expert</p>
        </div>
    </div>,

    <div className='d-flex align-items-center gap-15'>
        <img src='https://i.postimg.cc/FKmyzq8z/service-04.png' alt='services' />
        <div>
            <h6>Affordable Prices</h6>
            <p className='mb-0'>Get Factory Default Price</p>
        </div>
    </div>,
    
    <div className='d-flex align-items-center gap-15'>
        <img src='https://i.postimg.cc/ryn2J296/service-05.png' alt='services' />
        <div>
            <h6>Secure Payments</h6>
            <p className='mb-0'>100% Protected Payment</p>
        </div>
    </div>
];     
          
                  
export const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls="true"
        disableDotsControls="true"
    />
);
