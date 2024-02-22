import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Herocarousel.css';
import { useStateValue } from '../../StateProvider';

const Herocarousel = ({ image, image_alt }) => {
    const [dispatch] = useStateValue(); // Destructuring the dispatch function

    // Dispatch the item into the data layer
    // dispatch({
    //     type: 'ADD_HERO_CAROUSEL',
    //     item: {
    //         image: image,
    //         image_alt: image_alt,
    //     }
    // });

    const images = [
      { src: 'images/main-banner-1.jpg', alt: 'main-banner' },
      { src: 'images/main-banner.jpg', alt: 'main-banner' }
      // Add more image paths here as needed
    ];

    const showButtons = "VisibleOnHover";
    return (
        <div className='main-banner position-relative my__carousel_main'>
            <Carousel fade>
            {images.map((image, index) => (
                <Carousel.Item key={index} interval={5000}>
                    <img className="img-fluid d-block w-100" 
                      src={image.src} 
                      alt={image.alt} 
                    />
                    <div className='main-banner-content position-absolute'>
                        <h4>SUPERCHARGED FOR PROS.</h4>
                        <h5>iPad S13+ Pro.</h5>
                        <p>From $999.00 or $41.62/mo.<br />for 24 mo.</p>
                        <Link className='button'>BUY NOW</Link>
                    </div>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Herocarousel;
