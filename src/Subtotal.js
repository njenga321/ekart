import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
            <>
                <p> <small>CART SUMMARY</small> </p>
                <p className='subtotal_price'>
                    <small>Subtotal</small> <p>{value}</p>
                </p>
                <small className='subtotal_gift'>
                    <input type='checkbox' /> This order contains a gift
                </small>
                <button onClick={e => navigate('/payment')} >CHECK OUT ({value})</button>
            </>
            
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        
    </div>
  )
}

export default Subtotal