import React from 'react';
import Product from '../../components/product/Product';

function Phones() {
  const phonesCategory = 'phones'; // Set the category name
  return (
    <div className='container-xxl'>
      <div className='store-subtitle col-12'>
        <h3>Phones and Tabs</h3>
      </div>
      <div className='col-12 py-1'>
        <Product category={phonesCategory} /> {/* Pass the category name */}
      </div>
    </div>
  );
}

export default Phones;
