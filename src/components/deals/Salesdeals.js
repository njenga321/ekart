import React, { useEffect } from 'react';
import './Salesdeals.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productsSlice';
import { Link } from 'react-router-dom';

function Salesdeals() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const  category = 'salesdeals';

  useEffect(() => {
    dispatch(fetchProducts(category)); // Fetch products based on the provided category
  }, [dispatch, category]);

  return (
    <div className="deals-row">
        <div className='deals-grid'>
        {!products.length && <p className='text-dark'>Loading products...</p>}
            {!!products.length && (
              products.map((product) => {
                const { id, title, price, oldprice, image } = product;
                return (
                    <Link to={`/product/${id}`} className='productLink' key={id}>
                        <div className="card">
                            <div className="content">
                                <div className="imgBx">
                                    <img src={image} alt={title}/>
                                </div>
                                <div className="contentBx flex-column text-center">
                                    <div className=''>
                                        <h3 >{title}</h3>
                                    </div>
                                    <div className=''>
                                        <p className='text-white'><strike><span>Ksh {parseFloat(oldprice).toLocaleString()}</span></strike></p>
                                    </div>
                                    <div className='bg-white'>
                                        <p className=''><small>Now </small><strong>Ksh {parseFloat(price).toLocaleString()}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    );
                        })
                           )}
        </div>
    
</div>

  )
}

export default Salesdeals