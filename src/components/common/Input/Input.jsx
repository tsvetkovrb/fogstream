import React from "react";

import "./Input.css";

export const Input = ({ type, placeholder, className, ...props }) => (
  <input type={type} placeholder={placeholder} className="input" {...props} />
);
