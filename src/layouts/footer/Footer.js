import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <footer className='py-3'>
            <div className='container-xxl'>
            <div className='row align-items-center'>
    <div className='col-md-5 col-sm-12'>
        <div className='footer-top-data d-flex align-items-center text-white'>
            <div className='gap-15 newsletter'>
             <SiMinutemailer size={40} />
             <h3 className='mb-0 text-white text-center '>Sign Up for Newsletter</h3>
            </div>
        </div>
    </div>
    <div className='col-md-7 col-sm-12'>
        <div className='input-group'>
            <input
                type='text'
                className='form-control form-control-sm text-white'
                placeholder='Your Email Address'
                aria-label= 'Your Email Address'
                aria-describedby='basic-addon2'
            />
            <span className='input-group-text p-2 text-white' id='basic-addon2'>
                Subscribe
            </span>
        </div>
    </div>
</div>

            </div>
        </footer>
        <footer className='py-3 footer-upper'>
            <div className='container-xxl'>
                <div className='footer-row'>
                    <div className='contact-us'>
                        <h4 className='mb-4 text-white'>Contact Us</h4>
                        <div>
                            <address className=' text-white'>
                                Ekart Tower <br/>
                                Store No. G001 <br/>
                                0075 Kiambu, Kenya 
                            </address>
                            <a href='tel:+254 726990825' className='mt-3 d-block mb-1 text-white'>+254 726990825</a>
                            <a href='mailto:njengaofficial@yahoo.com' className='mt-2 d-block mb-0 text-white'>info@ekartstore.com</a>
                            <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                                <a className='text-white' href=''>
                                    <FaLinkedin className='fs-4' />
                                </a>
                                <a className='text-white' href=''>
                                    <FaInstagramSquare className='fs-4' />
                                </a>
                                <a className='text-white' href=''>
                                    <FaFacebookSquare className='fs-4' />
                                </a>
                                <a className='text-white' href=''>
                                    <FaGithubSquare className='fs-4' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='information'>
                        <h4 className=' text-white'>Information</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                            <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                            <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                            <Link className='text-white py-2 mb-1'>Terms Of Service</Link>
                            <Link className='text-white py-2 mb-1'>Blogs</Link>
                        </div>
                    </div>
                    <div className='navigation'>
                        <h4 className=' text-white'>Navigation</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className='text-white py-2 mb-1' to='./'>Home</Link>
                            <Link className='text-white py-2 mb-1'>About Us</Link>
                            <Link className='text-white py-2 mb-1'>FAQ</Link>
                            <Link className='text-white py-2 mb-1'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='quick-links'>
                        <h4 className=' text-white'>Quick Links</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className='text-white py-2 mb-1' to='./phones'>Phones, Tablets & Accessories</Link>
                            <Link className='text-white py-2 mb-1' to='./computers'>Computing</Link>
                            <Link className='text-white py-2 mb-1' to='./homeEntertainment'>Home Entertainment</Link>
                            <Link className='text-white py-2 mb-1' to='./gaming'>Gaming</Link>
                            <Link className='text-white py-2 mb-1' to='./accessories'>Accessories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-3 footer-lower'>
            <div className='row'>
                <div className='col-12 mb-0 text-white'>
                    <p className='text-center'>&copy; {new Date().getFullYear()}: Developed by <a href='https://njenga-peter-portfolio.vercel.app/' target='_blank'>Peter Njenga</a> - CEO & Lead Web Developer <a href='https://www.brandveneer.com' target='_blank'>@Brandveneer</a></p>
                </div>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer