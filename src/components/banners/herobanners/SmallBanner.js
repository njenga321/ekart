import React from 'react';
import './SmallBanner.css';
import AnimatedText from '../../cards/AnimatedText';
import ProductData from '../../product/ProductsArray';
import { Link } from 'react-router-dom';

function SmallBanner() {
  const bannersContent = ProductData.smallbannersContent;

  return (
    <div className='small-banner-grid'>
      {/* Map over the bannersContent array to render small banners */}
      
        {bannersContent.map((banner, index) => (
          <Link to='./officialstores'>
          <div className='small-banner position-relative' key={index}>
            <img src={banner.image} className='img-fluid' alt={`catbanner-${index}.jpg`} />
            <div className='small-banner-content position-absolute'>
              <h4>{banner.title}</h4>
              <h5 className='text-white'>{banner.subtitle}</h5>
              <p>{banner.description}</p>
            </div>
          </div>
          </Link>
        ))}
      
      
      {/* Fourth Small Banner with Animated Text */}
      <div className='small-banner position-relative animated-banner'>
        <AnimatedText />
      </div>
    </div>
  );
}

export default SmallBanner;
