import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = ()=> {
  const [{basket, user, value }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
   <>
   <header className='header-top-strip py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
        </div>
        <div className='col-6'>
          <p className='text-end text-white mb-0'>Hotline: <Link className='text-white' href='tel:+254726990825'>+254 726990825</Link></p>
        </div>
      </div>
    </div>
   </header>

   <header className='header-upper py-3'> 
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='col-2'>
          <Link to='/'>
          <img 
            className='header_logo'
          src="https://i.ibb.co/X79jgMY/Ekart.png" alt="Ekart-logo" border="0"
          />
        </Link>
        </div>
        <div className='col-4 py-0'>
          <div className='input-group'>
          <input
            type='text'
            className='form-control py-1'
            placeholder='Search Product Here'
            aria-label='Search Product Here'
            aria-describedby='basic-addon2'
          />
          <span className='input-group-text p-2' id='basic-addon2'>
            <BsSearch className='fs-5'/>
          </span>
          </div>
        </div>
        <div className='col-6'>
          <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/orders'>
                  <img src='images/orders.png' alt='compare' />
                  <p className='mb-0'>Returns<br /><strong>& Orders</strong></p>
                </Link>
              </div>

              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/wishlist.svg' alt='wishlist' />
                  <p className='mb-0'>Favourite <br /><strong>Wishlist</strong></p>
                </Link>
              </div>

              <div>
                <Link onClick={handleAuthentication} className='d-flex align-items-center gap-10 text-white' to={!user && '/login'}>
                  <img src='images/user.svg' alt='user' />
                  <p className='mb-0'>Hello {!user? 'Guest': user.email} <br /><strong>{user ?'Sign Out' : 'Sign In'}</strong></p>
                </Link>
              </div>

              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/checkout'>
                  <img src='images/cart.svg' alt='cart' />
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>{basket?.length}</span>
                    <p className='mb-0'>${value}</p>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
   </header>

   <header className='header-bottom py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='menu-bottom d-flex align-items-center gap-30'>
            <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                >
                  <img src='images/menu.svg' />
                  <span className='ms-1  d-inline-block'>Shop Categories</span>
                </button>
                <ul class="dropdown-menu" aria-labelledby='dropdownMenuButton1'>
                  <li><Link className="dropdown-item text-white " to="#">Action</Link></li>
                  <li><Link className="dropdown-item text-white " to="#">Another action</Link></li>
                  <li><Link className="dropdown-item text-white " to="#">Something else here</Link></li>
                </ul>
              </div>
            </div>
            <div className='menu-links'>
              <div className='d-flex align-items-center gap-15'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Our Store</NavLink>
                <NavLink to='/'>Blogs</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
   </header>

   </>
  )
}

export default Header