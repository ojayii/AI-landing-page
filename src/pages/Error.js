import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <>
      <Navbar />
      <center>
        <h1>ERROR: PAGE NOT FOUND</h1>
        <Link to='/'>Return to home page</Link>
      </center>
      <Footer />
    </>
  );
};

export default Error;
