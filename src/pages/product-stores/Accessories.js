import React from 'react'
import Product from '../../components/product/Product'

function Accessories() {
  const  accessoriesCategory = 'accessories';
  return (
    <div className='container-xxl'>

        <div className='store-subtitle col-12'>
            <h3>Accessories</h3>
        </div>

        <div className='col-12 py-1'>
            <Product category={accessoriesCategory} />
        </div>

    </div>
  )
}

export default Accessories