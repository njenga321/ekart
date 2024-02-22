import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import Herocarousel from './components/carousel/Herocarousel'
import SmallBanner from './components/banner/SmallBanner'
import Product from './components/product/Product'

const LandingPage = () => {
  return (
    
    <>
    <div className='container-xxl'>

    <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
            <div className='row justify-content-evenly'>
                <div className='col-6'>
                    <Herocarousel />
                </div>
                <div className='col-6'>
                    <SmallBanner />
                </div>
            </div>
        </div>
    </section>


    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='services text-white d-flex align-items-center justify-content-evenly'>

                        <div className='d-flex align-items-center gap-15'>
                            <img src='images/service.png' alt='services' />
                            <div>
                                <h6>Free Shipping</h6>
                                <p className='mb-0'>For orders over $100</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <img src='images/service-02.png' alt='services' />
                            <div>
                                <h6>Daily Surprise Offers</h6>
                                <p className='mb-0'>Save upto 30% off</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <img src='images/service-03.png' alt='services' />
                            <div>
                                <h6>Support 24/7</h6>
                                <p className='mb-0'>Shop with an expert</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <img src='images/service-04.png' alt='services' />
                            <div>
                                <h6>Affordable Prices</h6>
                                <p className='mb-0'>Get Factory Default Price</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <img src='images/service-05.png' alt='services' />
                            <div>
                                <h6>Secure Payments</h6>
                                <p className='mb-0'>100% Protected Payment</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='home-wrapper-deals position-relative py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='home-subtitle col-12 py-2'>
                    <h3 className='text-white justify-item-center align-items-center'>Ekart Deals</h3>
                </div>
                <div className='d-flex flex-wrap position-relative justify-content-center align-items-center'>
                   
                    <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src="images/navyblue-headphones.png"/>
                            </div>
                            <div class="contentBx flex-column text-center">
                                <div className=''>
                                    <h3 className='text-white'>JBL Tune 760NC</h3>
                                </div>
                                <div className='mb-0'>
                                    <strike><span className='text-white'>Ksh 1,499</span></strike>
                                </div>
                                <div className='bg-white'>
                                    <p className=''><small>Now </small><strong>Ksh 2,222</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    
                    <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src="images/boat203-1.png"/>
                            </div>
                            <div class="contentBx flex-column text-center">
                                <div className=''>
                                    <h3 className='text-white'>boAt Airdopes 131</h3>
                                </div>
                                <div className='mb-0'>
                                    <strike><span className='text-white'>Ksh 3,500</span></strike>
                                </div>
                                <div className='bg-white'>
                                    <p className=''><small>Now </small><strong>Ksh 2,999</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src="images/boat255r-1.png"/>
                            </div>
                            <div class="contentBx flex-column text-center">
                                <div className=''>
                                    <h3 className='text-white'>boAt Rockerz 255</h3>
                                </div>
                                <div className='mb-0'>
                                    <strike><span className='text-white'>Ksh 1,161</span></strike>
                                </div>
                                <div className='bg-white'>
                                    <p className=''><small>Now </small><strong>Ksh 697</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src="images/jbl-endu-1.png"/>
                            </div>
                            <div class="contentBx flex-column text-center">
                                <div className=''>
                                    <h3 className='text-white'>JBL Endurance Run</h3>
                                </div>
                                <div className='mb-0'>
                                    <strike><span className='text-white'>Ksh 450</span></strike>
                                </div>
                                <div className='bg-white'>
                                    <p className=''><small>Now </small><strong>Ksh 249</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src="images/boat518-1.png"/>
                            </div>
                            <div class="contentBx flex-column text-center">
                                <div className=''>
                                    <h3 className='text-white'>boAt Rockerz 518</h3>
                                </div>
                                <div className='mb-0'>
                                    <strike><span className='text-white'>Ksh 13,300</span></strike>
                                </div>
                                <div className='bg-white'>
                                    <p className=''><small>Now </small><strong>Ksh 6,700</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className='home-featured-product py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='home-subtitle col-12 py-2'>
                    <h3 className='text-white'>Featured Products</h3>
                </div>
                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                    <div class="product">
                        <div class="imgbox"> <img src="https://i.imgur.com/iDwDQ4o.png" /> </div>
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
                        <div class="imgbox"> <img src="https://i.imgur.com/iDwDQ4o.png" /> </div>
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
        </div>
    </section>

    <section className='home-product-list py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='home-subtitle col-12 py-2'>
                    <h3 className='text-white'>You May also like</h3>
                </div>
                    <div className='wrapper d-grid'>
                    <Product 
                    id='2343561' 
                    title='Corsair Dark Core RGB Pro SE, FPS/MOBA Gaming Mouse with SLIPSTREAM Technology, Black, Backlit RGB LED, 18000 DPI, Optical, Qi wireless charging certified' 
                    price={79.99} 
                    image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61RdgVQ43TL._AC_SY355_.jpg' 
                    rating={5} 
                    />
                    <Product 
                    id='6768761' 
                    title='MSI QHD Rapid-IPS Quantum DOT Gaming Non-Glare Super Narrow Bezel 1ms 2560 x 1440 165Hz Refresh Rate Adjustable Arm G-Sync Compatible 27” Gaming Monitor (Optix MAG274QRF-QD),Black' 
                    price={319.99} 
                    image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41WNOeu8OFL._AC_SY200_.jpg' 
                    rating={4} 
                    />
                    <Product 
                    id='8943561' 
                    title='The Book of Unusual Knowledge Hardcover – Lay Flat, April 1, 2012' 
                    price={79.99} 
                    image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71WC3z4Wt0L._SY342_.jpg' 
                    rating={4} 
                    />
                    <Product 
                    id='2343561' 
                    title='Verbatim 8GB Premium SDHC Memory Card, UHS-I V10 U1 Class 10, Blue (96318)' 
                    price={7.99} 
                    image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717lQv8CYFL._AC_SY355_.jpg' 
                    rating={5} 
                    />
                    <Product 
                    id='8564561' 
                    title='Smart Watches for Men Activity Trackers and Smartwatches Alexa Built-in Smartwatch Make/Answer Call Smart Watch for Men Compatible with iOS & Android Heart Rate Sleep Tracking Mens Smart Watch' 
                    price={59.77} 
                    image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nPKVoFV6L.__AC_SX300_SY300_QL70_FMwebp_.jpg' 
                    rating={3} 
                    />
                    <Product 
                    id='70953561' 
                    title='Tochinkar Wireless Retro Gaming Console(64G), Plug & Play Video TV Game Stick with Built-in 9 Emulators, 20,000+ Video Games,4K HDMI Output, Revisit Classic Games with Dual 2.4G Wireless Controllers' 
                    price={45.97} 
                    image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Xb9amI4bL._AC_SX425_.jpg' 
                    rating={5} 
                    />
                    
                </div>
            </div>
        </div>
     </section>

    <section className='home-seo-text py-5'>
        <div className='container-xxl'>
            <div className='row text-white'>
                <h2>Ekart - Online Shopping in Kenya</h2>
                <p>Ekart is Kenya's leading online shopping mall. It was launched in September 2023 with the mission of "Quality and Value".</p>
                <p>Ekart serves a retail-customer base that continues to grow exponentially, offering products that span various categories of Electronics such as smart phones, laptops, subwoofer etc, Home Appliances and much more. Ekart continues to expand the mall, with the scope of offerings that will increase in variety, simplicity and convenience.</p>
                <p>The range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; order delivery-tracking, dedicated customer service support and many other premium services. The company is highly customer-centric and are committed towards finding innovative ways of improving the customers' shopping experience.</p>
               
            </div>
        </div> 
    </section>


    </div>
    </>
  )
}

export default LandingPage