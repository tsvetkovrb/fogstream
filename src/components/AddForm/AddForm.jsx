import React, { Component } from "react";

import "./AddForm.css";

export default class AddForm extends Component {
  state = {
    title: ""
  };

  hanldeSubmit = event => {
    event.preventDefault();

    const title = this.state.title;
    // проверка на наличие названия этапа
    if (title) {
      this.props.onAdd(title);
      this.setState({ title: "" });
    }
  };

  /**
   * Запись названия в State
   */
  handleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };

  /**
   * Render
   */
  render() {
    return (
      <form className="add-form" onSubmit={this.hanldeSubmit}>
        <input
          type="text"
          placeholder="Добавьте название этапа"
          value={this.state.title}
          onChange={this.handleChange}
          className="add-form__input"
        />
        <button className="add-form__button">Добавить этап</button>
      </form>
    );
  }
}
