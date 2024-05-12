import React, { useState } from 'react';
import './Payment.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, emptyBasket } from '../../store/reducers/basketSlice';
import { MdRemoveShoppingCart } from 'react-icons/md';
import CheckoutProduct from '../../components/checkoutproduct/CheckoutProduct';
import axios from '../../middleware/axios';
import { db } from '../../config/firebase';
import { doc, setDoc, collection } from "firebase/firestore";

const Payment = () => {
  const basket = useSelector((state) => state.basket);
  const basketArray = useSelector(state => state.basket.basket);
  const total = getBasketTotal(basket);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  

  const handleCardDetailsSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js not yet loaded
    }

    setProcessing(true);

    try {
      const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
      setClientSecret(response.data.clientSecret);

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (paymentMethodReq.error) {
        throw new Error(paymentMethodReq.error.message);
      }

      const { paymentMethod } = paymentMethodReq;

      const confirmPaymentReq = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmPaymentReq.error) {
        throw new Error(confirmPaymentReq.error.message);
      }

      const userDocRef = doc(db, 'users', `${user?.uid}`);
      const orderDocRef = doc(collection(userDocRef, 'orders'), confirmPaymentReq.paymentIntent.id);

      await setDoc(orderDocRef, {
        basket: basket,
        amount: confirmPaymentReq.paymentIntent.amount,
        created: confirmPaymentReq.paymentIntent.created,
      });

      setProcessing(false);
      dispatch(emptyBasket());
      navigate("/orders", { replace: true });
    } catch (error) {
      setError(error.message);
      setProcessing(false);
    }
  };

  const handleChange = (event) => {
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className='container-xxl'>
      <div className='payment'>
        <div className='payment_container'>
          <h1>Checkout ({basketArray?.length})</h1>

          <div className='payment_section'>
            <div className='payment_title'>
              <h3>Delivery Address</h3>
            </div>
            <div className='delivery_address'>
            <div className='delivery_address'>
              <form>
                <div class="grid-container">
                  <div class="grid-item">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                  </div>
                  <div class="grid-item">
                    <label for="street">Street Address:</label>
                    <input type="text" id="street" name="street" required/>
                  </div>
                  <div class="grid-item">
                    <label for="city">City:</label>
                    <input type="text" id="city" name="city" required/>
                  </div>
                  <div class="grid-item">
                    <label for="state">State:</label>
                    <input type="text" id="state" name="state" required/>
                  </div>
                  <div class="grid-item">
                    <label for="zip">Zip Code:</label>
                    <input type="text" id="zip" name="zip" required/>
                  </div>
                  <div class="grid-item">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required/>
                  </div>
                </div>
              </form>
            </div>

            </div>
          </div>
          <div className='payment_section'>
            <div className='payment_title'>
              <h3>Review items and Delivery</h3>
            </div>
            <div className='payment_items'>
              {basketArray && basketArray.length > 0 ? (
                // Render checkout products here
                basketArray.map(({ id, title, price, rating, image, quantity }) => (
                  <CheckoutProduct
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    rating={rating}
                    image={image}
                    quantity={quantity}
                    hideButton={true}
                  />
                ))) : (
                // Render empty basket message
                <div className="empty-basket">
                  <MdRemoveShoppingCart size={80} className='MdRemoveShoppingCart' />
                  <p>Your cart is empty!</p>
                  <p>Browse our categories and discover our best deals!</p>
                  <Link to='/officialstores'>
                    <button className="browse-button">Browse Products</button>
                  </Link>
                </div>
              )}

            </div>
          </div>
          <div className='payment_section '>
            <div className='payment_title'>
              <h3>Payment</h3>
            </div>
            <div>
              <div className='payment_pricecontainer'>
                <div className='payment_method'>
                  <div><p>Payment Method</p></div>
                  <div class="payment-grid">
                    <div class="image-container"><img src="/visa.svg" alt="Visa"/></div>
                    <div class="image-container"><img src="/mastercard.svg" alt="Mastercard"/></div>
                    <div class="image-container"><img src="/paypal.svg" alt="Paypal"/></div>
                    <div class="image-container"><img src="/M-PESA.png" alt="M-PESA"/></div>
                  </div>

                </div>
                
                  <CurrencyFormat
                    renderText={(value) => (
                      <h6 className='py-2'>Order Total: {value}</h6>
                    )}
                    decimalScale={2}
                    value={total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Ksh '}
                  />
                </div>
              <div className='payment_details'>
                <form onSubmit={handleCardDetailsSubmit}>
                  <CardElement onChange={handleChange} className='py-3' />
                  {error && <div className="error-message">{error}</div>}
                  <button disabled={processing || !stripe} className='browse-button'>
                    {processing ? 'Processing...' : 'Pay Now'}
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
