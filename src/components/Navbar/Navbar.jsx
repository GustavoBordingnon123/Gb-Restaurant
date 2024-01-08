import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = React.useState(false);

  return(
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='Restaurant logo' />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>

      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Resgister</a>
        <div />
        <a href='/' className='p__opensans'>Book a table</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggle(true)}/>


        {toggle && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu color='#fff' fontSize={27} onClick={() => setToggle(false)}  className='overlay__close'/>
              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#menu'>Menu</a></li>
                <li className='p__opensans'><a href='#awards'>Awards</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
              </ul>
          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
