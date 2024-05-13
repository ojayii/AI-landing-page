import "../styles/Header.css";
import { Link } from "react-router-dom";
import header_bgvector from "../images/header_bgvector.svg";
import header_herobg from "../images/header_herobg.svg";

const Header = () => {
  return (
    <header className='header'>
      <h1>A full customer service team, powered by AI</h1>
      <p>
        Don't settle for a basic chatbot - your customers deserve better. Get a
        fully stocked, AI-powered customer serviceautomation platform that
        resolves more inquiries with the least amount of effort.
      </p>
      <div className='header__btn-container'>
        <Link
          to=''
          className='btn'>
          See Ada in action
        </Link>
        <Link
          to=''
          className='btn'>
          Learn more
        </Link>
      </div>
      <img
        src={header_herobg}
        className='header__hero-img'
      />
      <img
        src={header_bgvector}
        className='header__bg-vector'
      />
    </header>
  );
};

export default Header;
