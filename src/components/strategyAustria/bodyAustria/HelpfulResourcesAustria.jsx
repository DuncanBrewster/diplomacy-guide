import React from "react";

const HelpfulResourcesAustria = () => {
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
        href="http://www.diplomacy-archive.com/resources/strategy/austria.htm"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <p className="author">Austria Diplomacy Archive: Various Authors</p>
      </a>
      <p className="bodyHeadings">Videos</p>
      <iframe
        title="howToAustria"
        width="320"
        height="180"
        src="https://www.youtube.com/embed/8o1mECEIKWc"
        style={{ border: "none" }}
      ></iframe>
    </>
  );
};

export default HelpfulResourcesAustria;
