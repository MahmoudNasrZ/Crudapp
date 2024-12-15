import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const WithGuard = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.authorization);
  return isLoggedIn ? (
    children
  ) : (
    <>
      <h3>Please Log in to show Data</h3> <Link to={"/"}>Go back</Link>
    </>
  );
};
export default WithGuard;
