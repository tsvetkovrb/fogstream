import React, { Component } from "react";
import { v4 } from "uuid";

import Stage from "./components/Stage/Stage";
import Form from "./components/AddForm/AddForm";

import steps from "./steps";

export default class App extends Component {
  /**
   * State
   */
  state = {
    stage: []
  };

  componentDidMount() {
    let stage = [];

    try {
      stage = JSON.parse(localStorage.getItem("stage")) || [];
    } catch (err) {
      stage = [{ name: "Этап 1" }];
    }

    this.setState({ stage });
  }

  /**
   * Добавление названия этапа
   */
  handleAdd = name => {
    const item = {
      name
    };

    const stage = [...this.state.stage, item];
    this.setState({ stage }, () => {
      localStorage.setItem("stage", JSON.stringify(stage));
    });
  };

  /**
   * Render
   */
  render() {
    return (
      <div style={styles.app} className="main">
        {this.state.stage.map(stage => (
          //Вывожу этапы, которые записываются в state
          <Stage name={stage.name} key={v4()} steps={steps} />
        ))}
        <Form onAdd={this.handleAdd} />
      </div>
    );
  }
}

/**
 * Делаю инлайновые стили, чтобы показать, что могу
 */

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  }
};
