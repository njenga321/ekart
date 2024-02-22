import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
  };

  return (
    <Link to={`/product/${id}`} className='product'> {/* Link to navigate to single product page */}
    <div className='product'>
      <div className='product_imgBx align-items-center justify-content-center'>
        <img src={image} alt='' />
      </div>
        <div className='product_info text-white'>
          <p>{title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className='product_rating'>
              {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
              ))}
              
            </div>
        </div>

        <button onClick={addToBasket}>Add To Cart</button>
    </div>
    </Link>
  )
}

export default Product