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
          path='/*'
          element={<Error />}
        />
      </Routes>
      {/* <Navbar /> */}
      {/* <Footer /> */}
      {/* <BrowserRouter></BrowserRouter> */}
    </div>
  );
}

export default App;
