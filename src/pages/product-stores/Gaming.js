import React from 'react'
import Product from '../../components/product/Product'

function Gaming() {
  const  gamingCategory = 'gamingProducts';
  return (
    <div className='container-xxl'>

        <div className='store-subtitle col-12'>
            <h3>Gaming Consoles and Controllers</h3>
        </div>

        <div className='col-12 py-1'>
            <Product category={gamingCategory} />
        </div>

    </div>
  )
}

export default Gaming