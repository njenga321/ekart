import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    
    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


  return (
    <div className='checkoutProduct'>
        <div className='checkoutProduct_wrap'>
            <img className='checkoutProduct_image' src={image} />
        

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                

                <div className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
                
            <div className='price_div'>
            <p className='checkoutProduct_price'>
            <strong><small>$</small>
                    {price}</strong>
                </p>
            </div>
        </div>
        {!hideButton && (
        <div onClick={removeFromBasket} className='checkoutProduct_remove'><DeleteForeverIcon /><p>Remove</p></div>
        )}
    </div>
  )
}

export default CheckoutProduct