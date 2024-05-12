import React from 'react';
import './CheckoutProduct.css';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { updateBasketQuantity, removeItemFromBasket } from '../../store/reducers/basketSlice';
import { useEffect, useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

function CheckoutProduct({ id, image, title, price, rating, quantity, hideButton }) {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.basket); 

  const [currentQuantity, setCurrentQuantity] = useState(quantity); // Local state for current quantity
  const totalPrice = parseFloat(price) * currentQuantity;

  useEffect(() => {
    // Update local state when basket quantity changes for this product
    const basketQuantity = basketItems?.find((item) => item.id === id)?.quantity;
    if (basketQuantity !== undefined && basketQuantity !== currentQuantity) {
      setCurrentQuantity(basketQuantity);
    }
  }, [basketItems, id, currentQuantity]); // Track dependencies

  const handleIncrement = () => {
    if (currentQuantity < 10) {
      setCurrentQuantity(currentQuantity + 1); // Optimistic update local state
      dispatch(updateBasketQuantity({ id, quantity: currentQuantity + 1 }));
    } else {
      console.warn(`Cannot add more than 10 items of ${title} to basket`);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity(Math.max(currentQuantity - 1, 0)); // Optimistic update local state
      dispatch(updateBasketQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItemFromBasket({ id }));
  };
  


  return (
    <div className='checkoutProduct'>
        <div className='checkoutProduct_wrap'>
          <div className='checkoutProduct_image' style={{backgroundImage: `url(${image})`}} title={title} ></div>

            <div className='checkoutProduct_info'>
                <div className='checkoutProduct_info_div1'>
                  <div>
                    <h6 className='checkoutProduct_title'>{title}</h6>
                  </div>
                  {!hideButton && (
                    <div>
                      <button onClick={handleRemove} className='checkoutProduct_remove d-flex' type='button' aria-label='delete'>
                         <MdDelete />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className='checkoutProduct_info_div2'>
                  <div className="prod_details_ratings">
                    <span className="rating_star">
                      {[...Array(5)].map((_, i) => (
                        <IoMdStar key={i} className={i < rating ? 'filled' : 'unfilled'} />
                      ))}
                    </span>
                    <span className='text-dark'>|</span>
                    <Link to="*" className='text-dark'>({rating})</Link>
                  </div>
                  
                  <div className='checkoutProduct_price'>
                      <p><strong><small>Ksh </small>{totalPrice.toLocaleString()}</strong></p>
                  </div>
                 
                </div>
                
                <div className='checkoutProduct_info_div3'>
                    <div className="quantity_box">
                        <button onClick={handleDecrement} type="button" disabled={currentQuantity === 1}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                        </button>
                        {quantity > 0 && ( // Conditionally render quantity only if it's positive
                                <span className="quantity_count">{currentQuantity}</span>
                            )}

                        <button onClick={handleIncrement} type="button">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}


export default CheckoutProduct;
