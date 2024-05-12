import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { TbCategory2 } from "react-icons/tb";
import { BsAndroid2, BsCart3, BsCartCheck, BsPerson, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from "react-icons/md";
import { FaApple, FaWindows } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { auth } from "../../config/firebase"; 

const Header = () => {
  // Access state using useSelector
  const { user } = useSelector((state) => state);
  const basket = useSelector(state => state.basket.basket);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleNavLinkClick = () => {
    setMenuOpen(false); // Close the menu when a NavLink is clicked
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  // Handle Serach Bar
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
    };
  

  return (
   <>
   <header className='header-top-strip py-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-8 d-flex'>
          <p className='text-dark mb-0 mr-1'>Free Delivery & Free Returns For Orders Over Ksh 5,000 | Download App </p>
          <div className='d-flex app-icons'>
            <div><FaApple /></div>
            <div><BsAndroid2 /></div>
            <div><FaWindows /></div>
          </div>
        </div>
        <div className='col-4'>
          <p className='text-end text-dark mb-0'>Hotline: <Link className='text-dark' href='tel:+254726990825'>+254 726 990 825</Link></p>
        </div>
      </div>
    </div>
   </header>

   <header className='header-upper py-3'> 
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='d-flex'>
          <div className='logo-div'>
            <Link to='/'>
              {/* <h2>EKART</h2> */}
            <img 
              className='header-logo'
              src="https://i.postimg.cc/NGZ5gjND/Ekart.png" alt="EKART" border="0"
            />
          </Link>
          </div>
          <div className='search-bar'>
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
          <div className='account-div'>
            <div className='header-upper-links d-flex align-items-center justify-content-end'>
                

                <div className='my-account'>
                  <Link onClick={handleAuthentication} className='d-flex align-items-center gap-10 text-dark' to={!user && '/login'}>
                  <BsPerson size={40}/>
                    <p className='mb-0'>Hello {!user? 'Guest': user.email} <br /><strong>{user ?'Sign Out' : 'Sign In'}</strong></p>
                  </Link>
                </div>

                <div className='cart'>
                <Link className='d-flex align-items-center gap-10 text-dark' to='/checkout'>
                    <div className=' align-items-center position-relative'>
                        {basket.length > 0 && (
                            <span className='badge text-white position-absolute'>{basket.length}</span>
                        )}
                        <BsCart3 size={40}/>
                    </div> 
                    <p className='mb-0'>Your <br /><strong>Cart</strong></p>
                </Link>

                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
   </header>

   <header className='header-bottom py-1'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='menu-bottom d-flex align-items-center gap-30'>
            <div className='left-bottom-header d-flex '>
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  >
                    <TbCategory2 size={40}/>
                    <span className='ms-1  d-inline-block'>Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby='dropdownMenuButton1'>
                    <li><Link className="dropdown-item" to="./phones">Phones & Tablets</Link></li>
                    <li><Link className="dropdown-item" to="./computers">Laptops & Desktops</Link></li>
                    <li><Link className="dropdown-item" to="./accessories">Accessories</Link></li>
                    <li><Link className="dropdown-item" to="./homeEntertainment">Home Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="./gaming">Gaming</Link></li>
                  </ul>
                </div>
              </div>

              <div className='menu-links justify-content-center d-flex'>
                <div className='web-nav-links d-flex align-items-center gap-30'>
                  <Link to='/'>Home</Link>
                  <NavLink to='/officialstores'>Our Store</NavLink>
                  <NavLink to='/blogs'>Blogs</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                </div>
              </div>
            </div>

            <div className='right-bottom-header d-flex'>
              <div className="d-flex returns align-items-center gap-30">
                <Link className='d-flex align-items-center gap-10 text-white' to='/orders'>
                  <BsCartCheck size={30}/>
                  <p className='mb-0'>Returns<br /><strong>& Orders</strong></p>
                </Link>
              </div>

              <div className="d-flex align-items-center gap-30">
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <MdFavoriteBorder size={30} />
                  <p className='mb-0'>Favourite <br /><strong>Wishlist</strong></p>
                </Link>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
   </header>



   {/* Mobile Navbar */}

   <nav>
    <div className='container-xxl'>
      
      {isSearchOpen && (
          <div className='search-bar py-2' ref={searchRef}>
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
        )}
    <div className='nav-strip'>
        <div className='mobile-nav-left'>
          {/* Hamburger Icon */}
          <div className={`hamburger ${menuOpen ? 'hidden' : ''}`} onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='logo-div'>
          <Link to='/'>
              {/* <h2>EKART</h2> */}
            <img 
              className='header-logo'
              src="https://i.postimg.cc/NGZ5gjND/Ekart.png" alt="EKART" border="0"
            />
          </Link>
          </div>
        </div>

        <div className='mobile-nav-right text-dark'>
          <div onClick={toggleSearch}>
            <BsSearch className='fs-5' size={20} style={{ display: isSearchOpen ? 'none' : 'inline-block' }} />
          </div>
          <div className='my-account'>
            <Link onClick={handleAuthentication} to={!user && '/login'} className='text-dark'>
              <BsPerson size={20}/>
            </Link>
          </div>
          <div className='cart'>
            <Link className='d-flex align-items-center gap-10 text-dark' to='/checkout'>
              <div className=' align-items-center position-relative'>
                {basket.length > 0 && (
                  <span className='badge text-white position-absolute'>{basket.length}</span>
                )}
                <BsCart3 size={20}/>
              </div> 
            </Link>
          </div>
        </div>  
    </div>  

    <div>
      {/* Menu */}
      <div className={`menu ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
        <div className='menu-strip d-flex py-2 px-3'>
          {/* Close Icon */}
          <div className='close-icon' onClick={handleToggleMenu}><IoClose size={35} /></div>
          <div className='logo-div px-4'>
            <Link to='/' onClick={handleNavLinkClick}>
            <div className='logo-div'>
              {/* <h2>EKART</h2> */}
            <img 
              className='header-logo'
              src="https://i.postimg.cc/NGZ5gjND/Ekart.png" alt="EKART" border="0"
            />
          </div>
            </Link>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="menu-items" aria-labelledby='dropdownMenuButton1'>
          <li><NavLink to='/officialstores' onClick={handleNavLinkClick}>Our Store</NavLink></li>
          <li><NavLink to="/phones" onClick={handleNavLinkClick}>Phones & Tablets</NavLink></li>
          <li><NavLink to="/computers" onClick={handleNavLinkClick}>Laptops & Desktops</NavLink></li>
          <li><NavLink to="/accessories" onClick={handleNavLinkClick}>Accessories</NavLink></li>
          <li><NavLink to="/homeEntertainment" onClick={handleNavLinkClick}>Home Entertainment</NavLink></li>
          <li><NavLink to="/gaming" onClick={handleNavLinkClick}>Gaming</NavLink></li>
          <li><Link to='/' onClick={handleNavLinkClick}>Home</Link></li>
          <li><NavLink to='/blogs' onClick={handleNavLinkClick}>Blogs</NavLink></li>
          <li><NavLink to='/contact' onClick={handleNavLinkClick}>Contact</NavLink></li>
        </ul>
      </div>
    </div> 
         
    </div>
   </nav>

   </>
  )
}


export default Header