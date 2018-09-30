import React, { Component } from "react";
import { Link } from "react-router-dom";

import { string, array } from "prop-types";

import "./Stage.css";
import { Step } from "../Step";

export default class Stage extends Component {
  state = {
    visible: true,
    timeValue: "00:00",
    steps: this.props.steps
  };

  static propTypes = {
    name: string.isRequired,
    steps: array.isRequired
  };

  /**
   * Изменение данных в шаге
   */
  handleEditingStep = event => {
    event.preventDefault();
    this.setState({
      editing: !this.state.editing
    });
  };

  /**
   * Render
   */

  render() {
    const { name } = this.props;
    return (
      <div className="stage">
        <button
          className="stage-visible-button"
          onClick={() => this.setState({ visible: !this.state.visible })} // Свернуть/развернуть этап
        >
          {this.state.visible ? "⨉" : "+"}
        </button>
        <div className="stage__name">{name}</div>
        <div className="stage__time">{this.state.timeValue}</div>
        {this.state.visible && (
          <div className="stage__steps">
            {this.state.steps.map(step => (
              //Вывожу массив из 3-х шагов, который находится в файле steps.js
              <Link key={step.id} to={`/${step.id}/editing`}>
                <Step name={step.name} author={step.author} time={step.time} />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}
