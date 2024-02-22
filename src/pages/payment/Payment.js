import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
import { doc, setDoc, addDoc, serverTimestamp, collection } from "firebase/firestore";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to change a client
        //stripe expects the total in currencies subunits

        const getClientSecret = async () => {
            try {
            const response = await axios.post(`/payments/create?total=${getBasketTotal(basket)*100}` 
            );
           
            console.log("THIS IS THE RESPONSE", response);
            setClientSecret(response.data.clientSecret);
                 }
              catch (error) {
                console.log("THIS IS THE ERROR", error);
                }
        }
        
        getClientSecret();

    },[basket]);

    console.log('THE SECRET IS >>>', clientSecret)

    //handle stripe details
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
            
        }).then(async ({ paymentIntent }) => {
            //paymentIntent = payment confirmation
           
          
            const userDocRef = doc(db, 'users', `${user?.uid}`);
            const orderDocRef = doc(collection(userDocRef, 'orders'), paymentIntent.id);

            try {
                await setDoc(orderDocRef, {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });
                console.log('Data added successfully!');
                // Clear the form fields or display a success message
                // Success actions
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({ type: "EMPTY_BASKET" });
                navigate("/orders", { replace: true });
            } catch (error) {
                console.error("Error adding order:", error);
                // Handle error, e.g., setError(error), display error message
            }

            })
    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        //display any error as the client types their card details
        setDisabled(event.empty);
        setError(event.error? event.error.message : '');
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout (<Link to = '/checkout'>{basket?.length}</Link>)</h1>
            {/* Payment section - Delivery address */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>2019 Biashara Lane</p>
                    <p>Murang'a, Kenya</p>
                </div>

            </div>
            {/* Payment section - Review Items */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                         />
                    ))}
                </div>
            </div>
            {/* Payment section - Payment method */}
            <div className='payment_section'>
            <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>

                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>

                    <div className='payment_pricecontainer'>
                        <CurrencyFormat
                            renderText={(value) => (
                                
                            <h3>Order Total: {value}</h3>
                                
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                        </button>
                    </div>

                    {/* Errors */}
                    {error && <div>{error}</div>}
                </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment