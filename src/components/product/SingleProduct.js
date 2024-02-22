import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function SingleProduct() {
  const { productId } = useParams();
  const location = useLocation();
  const [{ products }] = useStateValue();

  if (!products) {
    return <div className='text-white'>Loading...</div>;
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className='text-white'>Product not found</div>;
  }

  return (
    <div className="single-product">
      <div className='product_imgBx align-items-center justify-content-center'>
        <img src={product.image} alt='' />
      </div>
      <div className='product_info text-white'>
        <p>{product.title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className='product_rating'>
          {Array(product.rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;