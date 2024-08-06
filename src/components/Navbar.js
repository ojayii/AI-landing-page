import "../styles/Navbar.css";
import { Link } from "react-router-dom";
// import testImg from "../images/testImg.svg";
import logo from "../images/logo.svg";
// import iconMenu from "../images/iconMenu.svg";
// import iconCloseMenu from "../images/iconCloseMenu.svg";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const isMobileView = window.innerWidth <= 764 ? true : false;
  const [navToggle, setNavToggle] = useState(false);

  console.log(window.innerWidth);

  return (
    <nav className='navbar'>
      <input
        type='checkbox'
        name=''
        id=''
        className='nav_toggle'
        onChange={() => setNavToggle(!navToggle)}
      />
      <span className='nav_toggle'></span>
      {isMobileView && <></>}
      <Link
        to='/ada-landing-page/'
        className='navbar__logo-container'>
        <img
          src={logo}
          alt='Ada logo'
        />
      </Link>
      {/* <a
        href='#'
        className='navbar__logo-container'>
        <img
          src={logo}
          alt='Ada logo'
        />
      </a> */}
      <div
        className='navbar__nav-links '
        style={{}}>
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
        <Link
          to='/ada-landing-page/getDemo'
          className='navlinks__get-demo btn btn__bg-purple'
          // className='navbar__get-demo btn'
        >
          Get a Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
