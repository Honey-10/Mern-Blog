import React from "react";
import { NavLink, Navlink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We Are Sorry, Page not Found</h2>
          <p className="mb-5">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable
          </p>
          <NavLink to="/"> Back to Home Page</NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
