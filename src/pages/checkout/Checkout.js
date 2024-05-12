import React from 'react';
import './Checkout.css';
import CheckoutProduct from '../../components/checkoutproduct/CheckoutProduct';
import Subtotal from '../../components/subtotal/Subtotal';
import { useSelector, useDispatch } from 'react-redux';
import { updateBasketQuantity } from '../../store/reducers/basketSlice';
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';


const Checkout = () => {
  const basket = useSelector(state => state.basket.basket);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateBasketQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className='container-xxl'>
      <div className='row'>
        <div className='checkout'>
          <div className='cart_HeaderTop'>
            <h2 className='checkout_title'>Shopping Cart</h2>
            <p className='cart-details'>
              TOTAL ({basket ? basket.length : 0} {basket && basket.length !== 1 ? 'items' : 'item'})
            </p>
          </div>
          <div className='checkout_wrap'>
            <div className='checkout_cards'>
              {basket && basket.length > 0 ? (
                basket.map(({ id, title, price, rating, image, quantity }) => (
                  <CheckoutProduct
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    rating={rating}
                    image={image}
                    quantity={quantity}
                    hideButton={false} // Show delete button
                    handleQuantityChange={handleQuantityChange}
                  />
                ))
              ) : (
                <div className="empty-basket">
                    <MdRemoveShoppingCart className='MdRemoveShoppingCart' size={80}/>
                    <p>Your cart is empty!</p>
                    <p>Browse our categories and discover our best deals!</p>
                    <Link to='/officialstores'>
                      <button className="browse-button">Browse Products</button>
                    </Link>
                </div>

              )}
            </div>
            <div className='checkout_subtotal'>
              <Subtotal basket={basket} /> {/* Pass basket data to Subtotal */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
