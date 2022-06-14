import React from 'react';

const Topics = () => {
  return (
    <div className="topics">
        <a href="#general" style ={{textDecoration: "none"}}>
          <h4>General</h4>
        </a>
        <a href="#neighbors" style ={{textDecoration: "none"}}>
          <h4>Neighbors</h4>
        </a>
        <a href="#openings" style ={{textDecoration: "none"}}>
          <h4>Openings</h4>
        </a>
        <a href="#helpfulResources" style={{textDecoration: "none"}}>
          <h4>Resources</h4>
        </a>
      </div>
  );
};

export default Topics;