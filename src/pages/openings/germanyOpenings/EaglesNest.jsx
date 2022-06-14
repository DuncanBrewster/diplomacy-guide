import React from "react";
import Legend from "../../../components/legend/Legend";
import BaseMap from "../../../components/maps/BaseMap";
import Navbar from "../../../components/navbar/Navbar";
import ReturnGermany from "../../../components/returnRoutes/ReturnGermany";

const EaglesNest = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <BaseMap />
          <Legend />
        </div>
        <div className="right">
          <Navbar />
          <div className="bodySection">
            <ReturnGermany />
            <div className="content">
              <h5>Eagle's Nest</h5>
              <p>
                F Kie - Hol <br />A Mun - H <br />A Ber - Kie
              </p>
              <p>
                One subtle, overlooked move for Munich is to hold. Holding
                Munich is defensively sound; additionally, you upset no one and
                force England and France to fight amongst themselves over
                Belgium. If you are facing no immediate threats to your homeland
                in Fall 1901, then your army in Munich can move to Ruhr to set
                up your own play for Belgium in Spring 1902. Ordering Munich to
                hold also keeps your diplomatic options open for 1902, when you
                can surprise one of your neighbors with your two builds gained
                from Holland and Denmark. For example, you could bait France
                into building two fleets and then build two armies yourself,
                giving yourself a decisive advantage in the war over
                Belgium/Burgundy and all but certainly bringing England into
                your camp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EaglesNest;
