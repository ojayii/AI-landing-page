import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import testImg from "./testImg.svg";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-container'>
        <img
          src={testImg}
          alt=''
        />
        <p>ada</p>
      </div>
      <div className='navbar__nav-links '>
        <Link
          to='/pricing'
          className='nav-links__link'>
          Pricing
        </Link>
        <span></span>
        <div className='nav-links__menu-wrapper' >
          <button
            type='button'
            className='nav-links__link flex'>
            <p>Platform</p>
            <img src='' />
          </button>
          <div className='nav-menu'></div>
        </div>
        <div className='nav-links__menu-wrapper' >
          <button
            type='button'
            className='nav-links__link flex'>
            <p>Solutions</p>
            <img src='' />
          </button>
          <div className='nav-menu'></div>
        </div>
        <div className='nav-links__menu-wrapper' >
          <button
            type='button'
            className='nav-links__link flex'>
            <p>Resources</p>
            <img src='' />
          </button>
          <div className='nav-menu'></div>
        </div>
      </div>
      <Link
        to='/getDemo'
        className='navbar__get-demo-btn'>
        Get a Demo
      </Link>
      {/* <span className='navbar__get-demo-btn'></span> */}
    </nav>
  );
};

export default Navbar;
