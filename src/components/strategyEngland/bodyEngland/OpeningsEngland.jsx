import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsEngland = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/England"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p>
        England can choose between commitment to an attack against France or to
        calmly pick up builds from Norway and possibly Belgium, and wait for
        1902 to choose a side.
      </p>
      <p className="openingGroup">SOUTHERN OPENINGS</p>

      <NavLink to="/walesvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Wales Variation</p>
      </NavLink>
      <NavLink to="/yorkshirevariation" style={{ textDecoration: "none" }}>
        <p className="opening">Yorkshire Variation</p>
      </NavLink>

      <p className="openingGroup">NORTHERN OPENINGS</p>

      <NavLink to="/northernyorkshire" style={{ textDecoration: "none" }}>
        <p className="opening">Northern Yorkshire</p>
      </NavLink>
      <NavLink to="/churchillopening" style={{ textDecoration: "none" }}>
        <p className="opening">The Churchill Opening</p>
      </NavLink>

      <p className="openingGroup">THE SPLITS</p>

      <NavLink to="/welshsplit" style={{ textDecoration: "none" }}>
        <p className="opening">The Welsh Split</p>
      </NavLink>
      <NavLink to="/edinburghsplit" style={{ textDecoration: "none" }}>
        <p className="opening">The Edinburgh Split</p>
      </NavLink>
    </>
  );
};

export default OpeningsEngland;
