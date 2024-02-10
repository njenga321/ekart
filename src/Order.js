import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';


function Order({ order }) {
  if (!order || !order.data || !order.data.created || !order.data.basket) {
    console.log('Order Object', order);
    return null; // Return null if the order data is invalid
  }

  const formattedDate = moment.unix(order.data.created.seconds).format('MMMM Do YYYY, h:mma');

  return (
    <div className='order'>
      <h1>Your Orders</h1>

      <p>{formattedDate}</p>
      <p className='order_id'><small>{order.id}</small></p>

      {order.data.basket.map(item => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={value => <h3 className='order_total'>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
    </div>
  );
}

export default Order;