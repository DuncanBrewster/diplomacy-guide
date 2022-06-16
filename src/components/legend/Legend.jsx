import React from 'react';
import Army from './legendComponents/Army';
import Fleet from "./legendComponents/Fleet";
import ColorBoxAustria from "./legendComponents/ColorBoxAustria";
import ColorBoxEngland from "./legendComponents/ColorBoxEngland";
import ColorBoxFrance from "./legendComponents/ColorBoxFrance";
import ColorBoxGermany from "./legendComponents/ColorBoxGermany";
import ColorBoxItaly from "./legendComponents/ColorBoxItaly";
import ColorBoxRussia from "./legendComponents/ColorBoxRussia";
import ColorBoxTurkey from "./legendComponents/ColorBoxTurkey";


const Legend = () => {
  return (
    <>
    <div className="creditContainer">
     <a
        href="https://www.backstabbr.com/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        
        <span className="author" id="credit">Map courtesy of Backstabbr</span>
      </a>
    </div>
    <div className="legend">
        <div className="legendItem" id="l-army">
          <Army />
          Army
        </div>
        <div className="legendItem" id="l-fleet">
          <Fleet />
          Fleet
        </div>
        <div className="legendCountry" id="l-austria">
          <ColorBoxAustria />
          Austria 3
        </div>
        <div className="legendCountry" id="l-england">
          <ColorBoxEngland />
          England 3
        </div>
        <div className="legendCountry" id="l-france">
          <ColorBoxFrance />
          France 3
        </div>
        <div className="legendCountry" id="l-germany">
          <ColorBoxGermany />
          Germany 3
        </div>
        <div className="legendCountry" id="l-italy">
          <ColorBoxItaly />
          Italy 3
        </div>
        <div className="legendCountry" id="l-russia">
          <ColorBoxRussia />
          Russia 4
        </div>
        <div className="legendCountry" id="l-turkey">
          <ColorBoxTurkey />
          Turkey 3
        </div>
      </div>
      </>
  )
}

export default Legend;