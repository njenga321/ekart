import React, { useState, useEffect } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux'; 
import { getBasketTotal } from '../../store/reducers/basketSlice'; 
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket);
  const basketArray = useSelector(state => state.basket.basket);
  const subtotal = getBasketTotal(basket);
  const deliveryThreshold = 5000; // Delivery threshold in Ksh

  const [isGiftOrder, setIsGiftOrder] = useState(false); // Track gift checkbox state
  const [remainingForFreeDelivery, setRemainingForFreeDelivery] = useState(null);

  useEffect(() => {
    // Calculate remaining amount for free delivery
    const parsedSubtotal = parseFloat(subtotal.replace(/[^0-9.-]/g, ''));
    const remaining = Math.max(0, deliveryThreshold - parsedSubtotal); // Ensure non-negative remaining
    setRemainingForFreeDelivery(remaining.toFixed(2));
  }, [subtotal, deliveryThreshold]);

  const handleCheckout = () => {
    navigate('/payment', { state: { isGiftOrder } }); // Pass gift order state
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <strong>
                CART SUMMARY
              </strong>
            </p>
            <p className='subtotal_price'>Subtotal <span><strong>{subtotal}</strong></span></p>
            <p className='delivery_threshold'>
            {remainingForFreeDelivery <= 0 ? 'Congratulations! Free Delivery For Your Order!' : `You're Ksh ${parseFloat(remainingForFreeDelivery).toLocaleString()} away from Free Delivery`}
            </p>
            <div className='input-group'>
              <input
                type='text'
                className='form-control form-control-sm'
                placeholder='Enter coupon code'
                aria-label='Enter coupon code'
                aria-describedby='basic-addon2'
              />
              <span className='input-group-text p-2 text-white' id='basic-addon2'>
                Apply
              </span>
            </div>
            <small className='subtotal_gift'>
              <input
                type='checkbox'
                checked={isGiftOrder}
                onChange={(e) => setIsGiftOrder(e.target.checked)}
              />
              This order contains a gift
            </small>
            {basketArray.length > 0 && (
              <button onClick={handleCheckout}>CHECK OUT</button>
            )}
            <div className="paymentLogoImg">
              {/* <img src="images/payment-icons.png" alt="payment-icons" className="paymentImg" /> */}
            </div>
          </>
        )}
        decimalScale={2}
        value={subtotal} // Use subtotal for display
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Ksh '}
      />
    </div>
  );
}

export default Subtotal;
