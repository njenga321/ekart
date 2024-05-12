import React from 'react'
import './FeaturedProduct.css';

function FeaturedProduct() {
  return (
    <section className='home-featured-product py-5'>
       
            <div className='row'>
                <div className='home-subtitle col-12 py-2'>
                    <h3 className='text-white'>Featured Products</h3>
                </div>
                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                    <div class="product">
                        <div class="imgbox"> <img src="images/Samsung-Galaxy-A24-4G.webp" /> </div>
                        <div class="specifies">
                            <h2>Analog Watch <br /> <span>Rolex</span></h2>
                            <div class="price">$1500</div> <label>Size</label>
                            <ul>
                                <li>10MM</li>
                                <li>20MM</li>
                                <li>30MM</li>
                                <li>40MM</li>
                                <li>50MM</li>
                            </ul> <label>Colors</label>
                            <ul class="colors">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="imgbox"> <img src="https://i.postimg.cc/K819BxsL/Tecno-Spark-10-C-500x500.webp" /> </div>
                        <div class="specifies">
                            <h2>Analog Watch <br /> <span>Rolex</span></h2>
                            <div class="price">$1800</div> <label>Size</label>
                            <ul>
                                <li>10MM</li>
                                <li>20MM</li>
                                <li>30MM</li>
                                <li>40MM</li>
                                <li>50MM</li>
                            </ul> <label>Colors</label>
                            <ul class="colors">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>

            </div>
       
    </section>
  )
}

export default FeaturedProduct