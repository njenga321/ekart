import React, { useState } from 'react';
import Salesdeals from '../../components/deals/Salesdeals';
import './Home.css';
import Herocarousel from '../../components/sliders/herocarousel/Herocarousel';
import SmallBanner from '../../components/banners/herobanners/SmallBanner';
import { Carousel } from '../../components/service-features/ServiceFeatures';
import HeroSwiper from '../../components/sliders/herocarousel/HeroSwiper';
import ProductData from '../../components/product/ProductsArray';
import ProductSlider from '../../components/sliders/productslider/ProductSlider'
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Home = () => {

  const [showFullContent, setShowFullContent] = useState(false);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  const herosliderImages = ProductData.heromainswiper;
  const accessories = ProductData.accessories;
  const computers = ProductData.computers;
  const featuredproducts = [...computers, ...accessories];

  const shuffledfeaturedproducts = shuffle(featuredproducts);
  return (
    
    <>
    <div className='container-xxl'>
        <div className='heroslider'>
            <HeroSwiper imgCategory={herosliderImages} />    
        </div>


      <div className='hero-banners py-2'>
        <div className=''>
            <Herocarousel />
        </div>
        <div className=''>
            <SmallBanner />
        </div>
      </div>

    
    
      <div className='product-slider py-3'>
        <div className='row deals-section'>
          <div className='home-subtitle col-12'>
            <h3 className='px-2'>Top Deals</h3>
            <Link to='./officialstores'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
            </div>
          <div className='col-12'>
            <Salesdeals />
          </div>
        </div>
      </div>
    

      <div className='product-slider py-3'>
        <div className='row'>
          <div className='home-subtitle col-12 '>
            <h3 className='px-2'>Featured Products</h3>
            <Link to='./officialstores'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
          </div>
          <div className='col-12 py-2'>
            <ProductSlider data={shuffledfeaturedproducts} />
          </div>
        </div>
      </div>
    

    <div className='service-features py-4'>
      <Carousel />
    </div>
      

    <section className='home-seo-text py-3'>
      <div className='row text-dark'>
        <h2>Ekart - Online Shopping in Kenya</h2>
        {!showFullContent && (
            <>
                <p>Ekart is Kenya's leading online shopping mall. It was launched in September 2023 with the mission of "Quality and Value".</p>
                <p>
                    <button onClick={() => setShowFullContent(true)}>READ MORE...</button>
                </p>
            </>
        )}
        {showFullContent && (
            <>
                <p>Ekart is Kenya's leading online shopping mall. It was launched in September 2023 with the mission of "Quality and Value".</p>
                <p>Ekart serves a retail-customer base that continues to grow exponentially, offering products that span various categories of Electronics such as smart phones, laptops, subwoofer etc, Home Appliances and much more. Ekart continues to expand the mall, with the scope of offerings that will increase in variety, simplicity and convenience.</p>
                <p>The range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; order delivery-tracking, dedicated customer service support and many other premium services. The company is highly customer-centric and are committed towards finding innovative ways of improving the customers' shopping experience.</p>
                <p>
                    <button onClick={() => setShowFullContent(false)}>SEE LESS</button>
                </p>
            </>
        )}
      </div>
        </section>


    </div>
    </>
  )
}

export default Home