import React from 'react';
import ProductSlider from '../../components/sliders/productslider/ProductSlider';
import ProductData from '../../components/product/ProductsArray';
import './OfficialStores.css';
import { GoChevronRight } from "react-icons/go";
import HeroSwiper from '../../components/sliders/herocarousel/HeroSwiper';
import { Link } from 'react-router-dom';

function OfficialStores() {
  const herosliderImages = ProductData.productmainswiper;
  const phones = ProductData.phones;
  const accessories = ProductData.accessories;
  const computers = ProductData.computers;
  const homeEntertainment = ProductData.homeEntertainment;
  const gamingProducts = ProductData.gamingProducts;

  return (
    <div className='container-xxl'>

        <div className=' py-3'>
            <HeroSwiper imgCategory={herosliderImages} />    
        </div>

      <div className='product-slider py-3'>
        <div className='row'>
          <div className='home-subtitle col-12'>
            <h3 className='px-3'>Phones & Tablets</h3>
            <Link to='/phones'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
          </div>
          <div className='col-12 py-2'>
            <ProductSlider data={phones} />
          </div>
        </div>
      </div>

      <div className='product-slider py-3'>
        <div className='row'>
          <div className='home-subtitle col-12'>
            <h3 className='px-3'>Accessories</h3>
            <Link to='/accessories'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
          </div>
          <div className='col-12 py-2'>
            <ProductSlider data={accessories} />
          </div>
        </div>
      </div>

      <div className='product-slider py-3'>
        <div className='row'>
          <div className='home-subtitle col-12'>
            <h3 className='px-3'>Laptops & Desktops</h3>
            <Link to='/computers'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
          </div>
          <div className='col-12 py-2'>
            <ProductSlider data={computers} />
          </div>
        </div>
      </div>

      <div className='product-slider py-3'>
        <div className='row'>
          <div className='home-subtitle col-12'>
            <h3 className='px-3'>Home Entertainment</h3>
            <Link to='/homeEntertainment'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
          </div>
          <div className='col-12 py-2'>
            <ProductSlider data={homeEntertainment} />
          </div>
        </div>
      </div>

      <div className='product-slider py-3'>
        <div className='row'>
          <div className='home-subtitle col-12'>
            <h3 className='px-3'>Gaming</h3>
            <Link to='/gaming'><p className='d-flex'>SEE ALL <GoChevronRight size={25}/></p></Link>
          </div>
          <div className='col-12 py-2'>
            <ProductSlider data={gamingProducts} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default OfficialStores;
