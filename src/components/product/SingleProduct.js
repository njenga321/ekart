import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SingleProduct.css';
import { Link, useParams } from 'react-router-dom';
import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import { addItemToBasket } from '../../store/reducers/basketSlice';
import ProductData from './ProductsArray';
import ProductSlider from '../sliders/productslider/ProductSlider';



const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false); 
  const { productId } = useParams();
  const basketItems = useSelector((state) => state.basket.basket);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const accessories = ProductData.accessories;
  const computers = ProductData.computers;
  const featuredproducts = [...computers, ...accessories];
  const shuffledfeaturedproducts = shuffle(featuredproducts);

  // Dispatch function for adding items to the basket
  const dispatch = useDispatch();

  // Extracting product details based on productId
  useEffect(() => {
    let foundProduct = null;

    // Search for the product in all product categories
    for (const category in ProductData) {
      const categoryProducts = ProductData[category];
      foundProduct = categoryProducts.find(product => product.id === productId);
      if (foundProduct) break; // Exit loop if product is found
    }

    if (foundProduct) {
      setProduct(foundProduct);
      setIsAddedToCart(false); // Reset the state when a new product is loaded
    } else {
      console.error('Error fetching product: Product not found');
    }
  }, [productId]);

  if (!product) {
    return <p>Ooops!! Product not found.</p>;
  }

  // Destructure product details
  const { id, image, title, price, description, rating } = product;

  // Handle adding product to basket
  const handleAddToBasket = () => {
    const existingItem = basketItems.find(item => item.id === product.id);
      dispatch(addItemToBasket(product));
      setIsAddedToCart(true);
    }
 

  return (
    <section id="product_details" className="section">
      <div className="container-xxl align-items-center">
        <div className="prod_details_wrapper">
          <div className="prod_details_left_col">
            <div className="prod_details_tabs">
              <div
                className='prod_image'
                style={{backgroundImage: image ? `url(${image})` : 'none'}}
                title={title ? title : ''}
              />
            </div>
          </div>
          <div className="prod_details_right_col">
            <h1 className="prod_details_title text-dark">{title}</h1>
            <div className="prod_details_ratings">
              <span className="rating_star">
                {[...Array(5)].map((_, i) => (
                  <IoMdStar key={i} className={i < rating ? 'filled' : 'unfilled'} />
                ))}
              </span>
              <span className='text-dark'>|</span>
              <Link to="*" className='text-dark'>{rating} Average Rating</Link>
            </div>

            <div className="prod_details_price">
              <div className="price_box">
                <h2 className="price text-dark">Ksh {parseFloat(price).toLocaleString()}</h2>
                <p className="saved_price">You save: Ksh 1,799 (35%)</p>
                <span className="tax_txt">(Inclusive of all taxes)</span>
              </div>
              <div className="badge">
                <span>
                  <IoMdCheckmark /> In Stock
                </span>
              </div>
            </div>
            <div className="separator"></div>
            <div className="productDescription">
              <div className="productDescription_text">
                <h4 className='text-dark'>Descripition :</h4>
                <p>{description}</p>
              </div>
              <div className="prod_details_offers text-dark">
                <h4>Offers and Discounts</h4>
                <ul>
                  <li>No Cost EMI on Credit Card</li>
                  <li>Pay Later &amp; Avail Cashback</li>
                </ul>
              </div>
              <div className="deliveryText">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingOutlinedIcon">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                </svg>  ...Skip the drive, we'll bring it to you.
              </div>
            </div>
            <div className="separator"></div>
            <div className='prod_details_additem'>
              <div className="prod_details_btn">
                <button onClick={handleAddToBasket} type="button" className={`btn ${isAddedToCart ? 'added-to-cart' : ''}`}>
                  {isAddedToCart ? "ITEM IN CART" : "Add to cart"}
                </button>
              </div>
              <div className="prod_details_btn">
                <button type="button" className="btn">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='related_products py-3'>
          <h3 className='home-subtitle text-white py-2 mb-4 px-3'>You May Also Like</h3>
          <ProductSlider data={shuffledfeaturedproducts} />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
