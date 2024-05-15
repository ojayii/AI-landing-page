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
          to=''>
          <img src={logo} />
        </Link>
        <div className='footer__col1__socials'>
          <Link to=''>
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
            <Link to=''>Pricing</Link>
            <Link to=''>Website Monitoring</Link>
            <Link to=''>Newsletter Monitoring</Link>
            <Link to=''>Blog</Link>
          </div>
        </div>
        <div className='footer__col2__content'>
          <p className='footer__col2__content__heading'>Inspire</p>
          <div className='footer__col2__content__links'>
            <Link to=''>Notion Competitor Monitoring Template</Link>
            <Link to=''>Competitor Analysis Prompts</Link>
            <Link to=''>Figma Competitor SWOT Template</Link>
            <Link to=''>Best Software Tools</Link>
          </div>
        </div>
        <div className='footer__col2__content'>
          <p className='footer__col2__content__heading'>Legal</p>
          <div className='footer__col2__content__links'>
            <Link to=''>About Us</Link>
            <Link to=''>Contact</Link>
            <Link to=''>FAQ</Link>
            <Link to=''>Privacy Policy</Link>
            <Link to=''>Terms and Conditions</Link>
            <Link to=''>Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
