import React from 'react'
import Product from '../../components/product/Product'

function Computers() {
  const  computersCategory = 'computers';
  return (
    <div className='container-xxl'>

        <div className='store-subtitle col-12'>
            <h3>Laptops and Desktops</h3>
        </div>

        <div className='col-12 py-1'>
            <Product category={computersCategory} />
        </div>

    </div>
  )
}

export default Computers