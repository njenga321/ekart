import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productsSlice'; // Import the fetchProducts action
import { addItemToBasket, removeItemFromBasket } from '../../store/reducers/basketSlice'; // Import both add and remove actions

const Product = ({ category }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [addedToCartMap, setAddedToCartMap] = useState({});

  useEffect(() => {
    // Fetch products based on the category when the component mounts or when the category changes
    dispatch(fetchProducts(category));
    setAddedToCartMap({});
  }, [dispatch, category]);

  const handleAddToCart = (productId) => {
    const productInCart = addedToCartMap[productId];
    if (productInCart) {
      // Item already in cart, remove it
      dispatch(removeItemFromBasket(productId));
      setAddedToCartMap((prevState) => ({
        ...prevState,
        [productId]: undefined,
      }));
    } else {
      // Add item to cart
      dispatch(addItemToBasket(productId));
      console.log("Dispatched action:", { type: addItemToBasket.type, payload: productId });
      setAddedToCartMap((prevState) => ({
        ...prevState,
        [productId]: products.find((product) => product.id === productId),
      }));
    }
    console.log("Updated addedToCartMap:", addedToCartMap);
  };

  return (
    <div className='product-component'>
      <div className='row'>
        <div className='products-row'>
          {/* Iterate over the products array */}
          {products.map((product) => (
            <div className='product' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className='product_imgBx'>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className='product_info'>
                  <div className='product_title'>
                    <p>{product.title}</p>
                  </div>
                  <p className='product_price'>Ksh {parseFloat(product.price).toLocaleString()}</p>
                  <div className="prod_details_ratings">
                    <span className="rating_star">
                      {[...Array(5)].map((_, i) => (
                        <IoMdStar key={i} className={i < product.rating ? 'filled' : 'unfilled'} />
                      ))}
                    </span>
                    <span className='text-dark'>|</span>
                    <Link to="*" className='text-dark'>({product.rating})</Link>
                  </div>
                </div>
              </Link>
              <div className="prod_details_btn">
                <button onClick={() => handleAddToCart(product.id)} type="button" className={`btn ${addedToCartMap[product.id] ? 'added-to-cart' : ''}`}>
                  {addedToCartMap[product.id] ? "ITEM IN CART" : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
