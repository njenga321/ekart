import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://slimfast.com/wp-content/uploads/2023/08/SlimFast-Keto-to-Delights-Website-Banner-Desktop.jpg' alt='' />

            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Shopping Cart ({basket.length})</h2>
                {/* checkout Product */}
              
                {basket.map(item => (
                  <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                   />
                ))}
            </div>
        </div>

        <div className='checkout_right'>
            <Subtotal />
        </div>


    </div>
  )
}

export default Checkout