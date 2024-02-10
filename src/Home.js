import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img
            className='home_image'
            src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61GfWyQax7L._SX3000_.jpg'
            />

            <div className='home_row'>
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
            </div>

            <div className='home_row'>
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
            </div>

            <div className='home_row'>
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
  )
}

export default Home