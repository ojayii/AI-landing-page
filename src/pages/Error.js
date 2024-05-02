import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>ERROR: PAGE NOT FOUND</h1>
      <Link to='/'>Return to home page</Link>
    </>
  );
};

export default Error;
