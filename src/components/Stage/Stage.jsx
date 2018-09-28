import React, { Component, Fragment } from "react";

import "./Stage.css";
import Step from "../Step";

export default class Stage extends Component {
  state = {
    visible: true,
    timeValue: "00:00",
    editing: true
  };
  /**
   * Свернуть/развернуть этап
   */
  handleClickButtonVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  /**
   * Обновить время этапа
   */
  updateTimeValue = event => {
    this.setState({
      timeValue: event.target.value
    });
    if (event.target.value === "") {
      event.target.value = "00:00";
      this.setState({
        timeValue: "00:00"
      });
    }
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
          onClick={this.handleClickButtonVisible}
        >
          {this.state.visible ? "⨉" : "+"}
        </button>
        <div className="stage__name">{name}</div>
        <div className="stage__time">{this.state.timeValue}</div>
        {this.state.visible && (
          <Fragment>
            <Step
              // bing(this) чтобы привязать this к контексту выполнения
              time={this.updateTimeValue.bind(this)}
              editing={this.state.editing}
              save={this.handleEditingStep.bind(this)}
            />
            <Step
              time={this.updateTimeValue.bind(this)}
              editing={this.state.editing}
              save={this.handleEditingStep.bind(this)}
            />
            <Step
              time={this.updateTimeValue.bind(this)}
              editing={this.state.editing}
              save={this.handleEditingStep.bind(this)}
            />
          </Fragment>
        )}
      </div>
    );
  }
}
