import React from 'react'
import Product from '../../components/product/Product'

function HomeEntertainment() {
  const  homeEntertainmentCategory = 'homeEntertainment';
  return (
    <div className='container-xxl'>

        <div className='store-subtitle col-12'>
            <h3>Home Entertainment</h3>
        </div>

        <div className='col-12 py-1'>
            <Product category={homeEntertainmentCategory} />
        </div>

    </div>
  )
}

export default HomeEntertainment