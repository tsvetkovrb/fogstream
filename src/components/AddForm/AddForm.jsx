import React, { Component } from "react";

import "./AddForm.css";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";

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
        <Input
          type="text"
          placeholder="Добавьте название этапа"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Button>Добавить этап</Button>
      </form>
    );
  }
}
