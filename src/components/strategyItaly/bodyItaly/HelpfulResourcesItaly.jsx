import React from "react";

const HelpfulResourcesItaly = () => {
  return (
    <>
      <h5 id="helpfulResources">Helpful Resources</h5>
      <p className="bodyHeadings">Articles</p>
      
      <a
        href="https://en.wikibooks.org/wiki/Diplomacy/Alliances"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Alliances: WikiBooks</p>
      </a>
      <a
        href="http://www.diplomacy-archive.com/resources/strategy/italy.htm"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Italy Diplomacy Archive: Various Authors</p>
      </a>
      <a
        href="https://brotherbored.com/diplomacy-dojo-episode-7-soloing-as-italy"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Soloing as Italy: BrotherBored</p>
      </a>
      <p className="bodyHeadings">Videos</p>
      <iframe
        title="howToItaly"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/ojT06Cooa5k"
        style={{border: "none"}}
      ></iframe>
    </>
  );
};

export default HelpfulResourcesItaly;