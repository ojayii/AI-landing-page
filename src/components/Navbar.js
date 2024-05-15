import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import testImg from "../images/testImg.svg";
import logo from "../images/logo.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a
        href='#'
        className='navbar__logo-container'>
        <img
          src={logo}
          alt='Ada logo'
        />
      </a>
      <div className='navbar__nav-links '>
        <Link
          to='/ada-landing-page/pricing'
          className='nav-links__link'>
          Pricing
        </Link>
        {/* <span></span> */}
        <Dropdown
          title={"Platform"}
          content={[
            { href: "#", title: "Testing" },
            { href: "#", title: "Platform" },
            { href: "#", title: "Elements" },
          ]}
        />
        <Dropdown
          title={"Solutions"}
          content={[
            { href: "#", title: "Computed" },
            { href: "#", title: "Testing" },
            { href: "#", title: "Learn more" },
            { href: "#", title: "Learn more" },
          ]}
        />
        <Dropdown
          title={"Resources"}
          content={[
            { href: "#", title: "Learn more" },
            { href: "#", title: "Testing" },
            { href: "#", title: "Resources" },
            { href: "#", title: "Styles" },
            { href: "#", title: "Layout" },
            { href: "logo.svg", title: "Download" },
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
        to='/ada-landing-page/getDemo'
        className='navbar__get-demo btn'>
        Get a Demo
      </Link>
      {/* <span className='navbar__get-demo-btn'></span> */}
    </nav>
  );
};

export default Navbar;
