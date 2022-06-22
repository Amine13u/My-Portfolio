import React from "react";
import "./Head.css";

const Head = ({ title, description }) => {
  return (
    <div className="head-container">
      <div className="head">
        <span>{title}</span>
      </div>
      {description ? (
        <div className="description">
          <span>{description}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="separator">
        <div className="line">
          <div className="blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
