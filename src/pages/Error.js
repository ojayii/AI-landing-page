import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
    <center>
      <h1>ERROR: PAGE NOT FOUND</h1>
      <Link to='/'>Return to home page</Link>
    </center>
    </>
  );
};

export default Error;
