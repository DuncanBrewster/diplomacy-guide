import React from "react";
import { NavLink } from "react-router-dom";

const OpeningsGermany = () => {
  return (
    <>
      <h5 id="openings">Openings</h5>
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Germany"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Source: Wikibooks</p>
      </a>
      <p>
        Germany has almost as much flexibility as France, but is not in as
        safe a position. Depending on the opening strategy, Germany is either
        guaranteed Denmark or Holland, and usually has a finger in the debate
        over Belgium.
      </p>
      <p>
        Germany's main choice is where to put their fleet—moving the fleet to
        Denmark provides leverage against Russia, but moving the fleet to
        Holland gives a better shot at three builds.
      </p>
      <p className="openingGroup">BLITZKRIEG OPENINGS</p>

      <NavLink to="/danishvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Danish Variation</p>
      </NavLink>
      <NavLink to="/dutchvariation" style={{ textDecoration: "none" }}>
        <p className="opening">Dutch Variation</p>
      </NavLink>

      <p className="openingGroup">MISCELLANEOUS OPENINGS</p>

      <NavLink to="/burgundiangambit" style={{ textDecoration: "none" }}>
        <p className="opening">Burgundian Gambit</p>
      </NavLink>
      <NavLink to="/silesianopening" style={{ textDecoration: "none" }}>
        <p className="opening">Silesian Opening</p>
      </NavLink>
      <NavLink to="/tyrolianopening" style={{ textDecoration: "none" }}>
        <p className="opening">Tyrolian Opening</p>
      </NavLink>
      <NavLink to="/eaglesnest" style={{ textDecoration: "none" }}>
        <p className="opening">Eagle's Nest</p>
      </NavLink>

    </>
  );
};

export default OpeningsGermany;
