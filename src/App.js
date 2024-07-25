// import testImg from "./images/testImg.svg";
import "./styles/App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import GetDemo from "./pages/GetDemo";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* <img src={testImg}/> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route
            path='/ada-landing-page'
            element={<Home />}
          />
          <Route
            path='/ada-landing-page/pricing'
            element={<Pricing />}
          />
          <Route
            path='/ada-landing-page/getdemo'
            element={<GetDemo />}
          />
          <Route
            path='/ada-landing-page/*'
            element={<Error />}
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
