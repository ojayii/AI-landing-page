import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import Pricing from "./pages/Pricing";
import GetDemo from "./pages/GetDemo";
import testImg from "./testImg.svg";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img
          src={testImg}
          alt='yooo'
        />
        <p>ada</p>
      </div>
      <span>
        <Link to='/pricing'>Pricing</Link>
      </span>
      <div className='nav-links'>
        <div>
          <button>
            <p>Platform</p>
            <img src='' />
          </button>
          <div></div>
        </div>
        <div>
          <button>
            <p>Platform</p>
            <img src='' />
          </button>
          <div></div>
        </div>
        <div>
          <button>
            <p>Platform</p>
            <img src='' />
          </button>
          <div></div>
        </div>
      </div>
      <span>
        <Link to='/getDemo'>Get a Demo</Link>
      </span>
    </nav>
  );
};

export default Navbar;
