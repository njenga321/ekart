import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='py-3'>
        <div className='container-xxl'>
            <div className='row align-items-center '>
                <div className='col-5'>
                    <div className='footer-top-data d-flex gap-15 align-items-center'>
                        <img src='images/newsletter.png' alt='newsletter' />
                        <h3 className='mb-o text-dark'>Sign Up for Newsletter</h3>
                    </div>
                </div>
                    <div className='col-7'>
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
    <footer className='py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-4'>
                    <h4 className='mb-4'>Contact Us</h4>
                    <div>
                        <address>
                            Ekart Tower <br/>
                            Store No. G001 <br/>
                            0075 Kiambu, Kenya 
                        </address>
                        <a href='tel:+254 726990825' className='mt-3 d-block mb-1 text-dark'>+254 726990825</a>
                        <a href='mailto:njengaofficial@yahoo.com' className='mt-2 d-block mb-0 text-dark'>info@ekartstore.com</a>
                        <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                            <a className='text-dark' href=''>
                                <FaLinkedin className='fs-4' />
                            </a>
                            <a className='text-dark' href=''>
                                <FaInstagramSquare className='fs-4' />
                            </a>
                            <a className='text-dark' href=''>
                                <FaFacebookSquare className='fs-4' />
                            </a>
                            <a className='text-dark' href=''>
                                <FaGithubSquare className='fs-4' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <h4>Information</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-dark py-2 mb-1'>Privacy Policy</Link>
                        <Link className='text-dark py-2 mb-1'>Refund Policy</Link>
                        <Link className='text-dark py-2 mb-1'>Shipping Policy</Link>
                        <Link className='text-dark py-2 mb-1'>Terms Of Service</Link>
                        <Link className='text-dark py-2 mb-1'>Blogs</Link>
                    </div>
                </div>
                <div className='col-3'>
                    <h4>Account</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-dark py-2 mb-1'>About Us</Link>
                        <Link className='text-dark py-2 mb-1'>FAQ</Link>
                        <Link className='text-dark py-2 mb-1'>Contact</Link>
                    </div>
                </div>
                <div className='col-2'>
                    <h4>Quick Links</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-dark py-2 mb-1'>Phones, Tablets & Accessories</Link>
                        <Link className='text-dark py-2 mb-1'>Computing</Link>
                        <Link className='text-dark py-2 mb-1'>Home Entertainment</Link>
                        <Link className='text-dark py-2 mb-1'>Gaming</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer className='py-3'>
        <div className='row'>
            <div className='col-12 mb-0 text-dark'>
                <p className='text-center'>&copy; {new Date().getFullYear()}: Powered by P. Njenga</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer