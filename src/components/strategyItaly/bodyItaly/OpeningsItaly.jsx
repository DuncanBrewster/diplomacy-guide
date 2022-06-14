import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsItaly = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Italy"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p className="openingGroup">TYROLIAN OPENINGS</p>

      <NavLink to="/obrianiattack" style={{ textDecoration: "none" }}>
        <p className="opening">Obriani Attack</p>
      </NavLink>

      <NavLink to="/tyrolianlepanto" style={{ textDecoration: "none" }}>
        <p className="opening">Tyrolian Lepanto</p>
      </NavLink>

      <p className="openingGroup">ALPINE OPENINGS</p>

      <NavLink to="/alpinelepanto" style={{ textDecoration: "none" }}>
        <p className="opening">Alpine Lepanto</p>
      </NavLink>

      <NavLink to="/alpinechicken" style={{ textDecoration: "none" }}>
        <p className="opening">Alpine Chicken</p>
      </NavLink>

      <NavLink to="/alpineattack" style={{ textDecoration: "none" }}>
        <p className="opening">Alpine Attack</p>
      </NavLink>

      <p className="openingGroup">LEPANTO OPENINGS</p>

      <NavLink to="/standardlepanto" style={{ textDecoration: "none" }}>
        <p className="opening">Standard Lepanto</p>
      </NavLink>

      <NavLink to="/bluewaterlepanto" style={{ textDecoration: "none" }}>
        <p className="opening">Blue Water Lepanto</p>
      </NavLink>

      <NavLink to="/keylepanto" style={{ textDecoration: "none" }}>
        <p className="opening">Key Lepanto</p>
      </NavLink>

    </>
  );
};

export default OpeningsItaly;