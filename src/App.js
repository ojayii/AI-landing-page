import testImg from './testImg.svg';
import './App.css';
import Navbar from './Navbar';
import Prices from './Prices';
import GetDemo from './GetDemo';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (

    <div className="App">
      {/* <img src={testImg}/> */}

      {/* <Prices/> */}

      <BrowserRouter>
        <Link to="/getdemo">Test link</Link>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/getdemo" element={<GetDemo/>}/>
          {/* <Route path="/" element={<Prices />}>
            <Route index element={<GetDemo />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
