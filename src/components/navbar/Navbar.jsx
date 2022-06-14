import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <h1>
        <span>
          <NavLink to="/" className="link" style={{ textDecoration: "none" }}>
            {/* <img src = "https://user-images.githubusercontent.com/87501964/157915847-d149ea5a-a3f2-415c-850c-b32c4db18aa3.png" alt="icon" id="icon"/> */}
            DIPLOMACY GUIDE
          </NavLink>
        </span>
      </h1>

      <div className="countries">
        <NavLink to="/austria" style={{ textDecoration: "none" }}>
          <h2>Austria</h2>
        </NavLink>
        <NavLink to="/england" style={{ textDecoration: "none" }}>
          <h2>England</h2>
        </NavLink>
        <NavLink to="/france" style={{ textDecoration: "none" }}>
          <h2>France</h2>
        </NavLink>
        <NavLink to="/germany" style={{ textDecoration: "none" }}>
          <h2>Germany</h2>
        </NavLink>
        <NavLink to="/italy" style={{ textDecoration: "none" }}>
          <h2>Italy</h2>
        </NavLink>
        <NavLink to="/russia" style={{ textDecoration: "none" }}>
          <h2>Russia</h2>
        </NavLink>
        <NavLink to="/turkey" style={{ textDecoration: "none" }}>
          <h2>Turkey</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
