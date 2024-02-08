import React, { useState, useEffect } from 'react';
// import data
import { header } from '../data';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
// import components
import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
      } py-6 px-12 lg:py-4 fixed w-full transition-all z-10 container mb-32`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='/' data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} alt='' />
          <h4 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-1">
              SF.
          </h4>
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div
          className='hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        <button
          className='btn btn-sm btn-outline hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1400'
        >
        <a href='/contact-us'>
          Contact
        </a>
        </button>
        {/* n
          {btnText}
        </button>
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
