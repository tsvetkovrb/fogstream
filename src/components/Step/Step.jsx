import React from "react";

import "./Step.css";

export default ({ time, name, author, onClick }) => (
  <div className="step" onClick={onClick}>
    <p className="step__name">{name}</p>
    <p className="step__author">{author}</p>
    <p className="step__time">{time}</p>
  </div>
);
