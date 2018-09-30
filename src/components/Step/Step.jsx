import React from "react";
import { string, func } from "prop-types";

import "./Step.css";

export const Step = ({ time, name, author, onClick }) => {
  return (
    <div className="step" onClick={onClick}>
      <p className="step__name">{name}</p>
      <p className="step__author">{author}</p>
      <p className="step__time">{time}</p>
    </div>
  );
};

Step.propTypes = {
  time: string,
  name: string,
  author: string,
  onClick: func
};
