import testImg from "./testImg.svg";
import "./styles/App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import GetDemo from "./pages/GetDemo";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* <img src={testImg}/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/pricing'
            element={<Pricing />}
          />
          <Route
            path='/getdemo'
            element={<GetDemo />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
