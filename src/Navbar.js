import './Navbar.css';
// import { Link } from 'react-router-dom';
import Prices from './Prices'
import testImg from './testImg.svg'

const Navbar = () => {
    return (
        <nav>
                {/* <Link to="/prices">Prices</Link> */}
             <span> 
             </span>
             <div>
                <img src={testImg}/>
                <p>ada</p>
             </div>
             <div className='nav-links'>
                <div>
                    <button>
                        <p>Platform</p>
                        <img src=''/>
                    </button>
                    <div></div>
                </div>
                <div>
                    <button>
                        <p>Platform</p>
                        <img src=''/>
                    </button>
                    <div></div>
                </div><div>
                    <button>
                        <p>Platform</p>
                        <img src=''/>
                    </button>
                    <div></div>
                </div>

             </div>
            {/* <span> 
                <Link to='prices'>Prices</Link>
             </span> */}
        </nav>
    )
}

export default Navbar;