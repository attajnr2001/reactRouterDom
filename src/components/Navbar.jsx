import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <h3 className="title">QFINDER</h3>
      <div className="links">
        <NavLink className="link" to="">
          Home
        </NavLink>
        <NavLink className="link" to="about">
          About
        </NavLink>
        <NavLink className="link" to="help">
          Help
        </NavLink>
        <NavLink className="link" to="careers">
          Careers
        </NavLink>
      </div>
   
    </div>
  );
}

export default Navbar;
