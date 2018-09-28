import React from "react";

import "./Step.css";

export default ({ time, editing, save }) => (
  <form className="step">
    <input type="text" />
    <input type="text" />
    <input type="time" onChange={time} defaultValue="00:00" />
    <button onClick={save} className="step__button">
      {editing ? "Изменить" : "Сохранить"}
    </button>
  </form>
);
