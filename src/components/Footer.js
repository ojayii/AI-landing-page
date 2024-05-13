import "../styles/Footer.css";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import logo from "../images/logo.svg";
import linkedinIcon from "../images/linkedinIcon.svg";
import facebookIcon from "../images/facebookIcon.svg";
import twitterIcon from "../images/twitterIcon.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__col1'>
        <Link
          className='footer__col1__logo-container'
          to='/home'>
          <img src={logo} />
        </Link>
        <div className='footer__col1__socials'>
          <Link to='/home'>
            <img src={linkedinIcon} />
          </Link>
          <Link to=''>
            <img src={facebookIcon} />
          </Link>
          <Link to=''>
            <img src={twitterIcon} />
          </Link>
        </div>
      </div>
      <div className='footer__col2'>
        <div className='footer__col2__content'>
          <p className='footer__col2__content__heading'>Industries</p>
          <div className='footer__col2__content__links'>
            <Link to='/home'>Pricing</Link>
            <Link to='/home'>Website Monitoring</Link>
            <Link to='/home'>Newsletter Monitoring</Link>
            <Link to='/home'>Blog</Link>
          </div>
        </div>
        <div className='footer__col2__content'>
          <p className='footer__col2__content__heading'>Inspire</p>
          <div className='footer__col2__content__links'>
            <Link to='/home'>Notion Competitor Monitoring Template</Link>
            <Link to='/home'>Competitor Analysis Prompts</Link>
            <Link to='/home'>Figma Competitor SWOT Template</Link>
            <Link to='/home'>Best Software Tools</Link>
          </div>
        </div>
        <div className='footer__col2__content'>
          <p className='footer__col2__content__heading'>Legal</p>
          <div className='footer__col2__content__links'>
            <Link to='/home'>About Us</Link>
            <Link to='/home'>Contact</Link>
            <Link to='/home'>FAQ</Link>
            <Link to='/home'>Privacy Policy</Link>
            <Link to='/home'>Terms and Conditions</Link>
            <Link to='/home'>Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
