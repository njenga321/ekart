import React from 'react'
import './SmallBanner.css'

function SmallBanner() {
  return (
    <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                        <div className='small-banner position-relative'>
                            <img src='images/catbanner-01.jpg' className='img-fluid' alt='catbanner-01.jpg' />
                            <div className='small-banner-content position-absolute'>
                                <h4>BEST SALE.</h4>
                                <h5>Laptops Max</h5>
                                <p>From $1699.00 or<br/>$64.62/mo.</p>
                            </div>
                        </div>

                        <div className='small-banner position-relative'>
                            <img src='images/catbanner-03.jpg' className='img-fluid' alt='catbanner-01.jpg' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>From $599.90 or $49.92/mo.<br/>for 24 mo.</p>
                                </div>
                        </div>

                        <div className='small-banner position-relative'>
                            <img src='images/catbanner-02.jpg' className='img-fluid' alt='catbanner-01.jpg' />
                            <div className='small-banner-content position-absolute'>
                                <h4>15% OFF</h4>
                                <h5>Smartwatch 7</h5>
                                <p>Shop the latest band<br/>styles and colors</p>
                            </div>
                        </div>

                        <div className='small-banner position-relative'>
                            <img src='images/catbanner-04.jpg' className='img-fluid' alt='catbanner-01.jpg' />
                            <div className='small-banner-content position-absolute'>
                                <h4>FREE ENGRAVING</h4>
                                <h5>AirPods Max</h5>
                                <p>High-fidelity playback<br/>& ultra-low distortion</p>
                            </div>
                        </div>
                    </div>
  )
}

export default SmallBanner