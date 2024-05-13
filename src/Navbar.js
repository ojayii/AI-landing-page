import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import testImg from "./images/testImg.svg";
import logo from "./images/logo.svg";
import Dropdown from "./components/Dropdown";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-container'>
        <img
          src={logo}
          alt=''
        />
      </div>
      <div className='navbar__nav-links '>
        <Link
          to='/pricing'
          className='nav-links__link'>
          Pricing
        </Link>
        {/* <span></span> */}
        <Dropdown
          title={"Platform"}
          content={[
            { src: "", title: "Testing" },
            { src: "", title: "Platform" },
            { src: "", title: "Elements" },
          ]}
        />
        <Dropdown
          title={"Solutions"}
          content={[
            { src: "", title: "Computed" },
            { src: "", title: "Testing" },
            { src: "", title: "Learn more" },
            { src: "", title: "Learn more" },
          ]}
        />
        <Dropdown
          title={"Resources"}
          content={[
            { src: "", title: "Learn more" },
            { src: "", title: "Testing" },
            { src: "", title: "Resources" },
            { src: "", title: "Styles" },
            { src: "", title: "Layout" },
          ]}
        />
        {/* <div className='nav-links__menu-wrapper'>
          <button
            type='button'
            className='nav-links__link flex'>
            <p>Platform</p>
            <img src='' />
          </button>
          <div className='nav-menu'></div>
        </div>
        <div className='nav-links__menu-wrapper'>
          <button
            type='button'
            className='nav-links__link flex'>
            <p>Solutions</p>
            <img src='' />
          </button>
          <div className='nav-menu'></div>
        </div>
        <div className='nav-links__menu-wrapper'>
          <button
            type='button'
            className='nav-links__link flex'>
            <p>Resources</p>
            <img src='' />
          </button>
          <div className='nav-menu'></div>
        </div> */}
      </div>
      <Link
        to='/getDemo'
        className='navbar__get-demo btn'>
        Get a Demo
      </Link>
      {/* <span className='navbar__get-demo-btn'></span> */}
    </nav>
  );
};

export default Navbar;
