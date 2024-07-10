import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>PageNotFound</h1>
      <Link to={"/"} style={{ color: "blueviolet" }}>
        Go to the Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
