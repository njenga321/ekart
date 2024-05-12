import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Herocarousel.css';
import ProductData from '../../product/ProductsArray';



const Herocarousel = () => {

  const carouselItems = ProductData.carouselItems;


return (
  <div className='main-banner position-relative my__carousel_main'>
    <Carousel controls={false}  fade>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} interval={5000}>
          <img className="img-fluid d-block w-100" src={item.image} alt={item.alt} />
          <div className='main-banner-content position-absolute'>
            <h4>{item.title}</h4>
            <h5>{item.subtitle}</h5>
            <p>{item.description}</p>
            <Link className='button' to={item.buttonLink}>{item.buttonText}</Link>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);
}

export default Herocarousel;
