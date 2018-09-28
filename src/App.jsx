import React, { Component } from "react";
import Stage from "./components/Stage/Stage";
import Form from "./components/AddForm/AddForm";

class App extends Component {
  /**
   * State
   */
  state = {
    stage: []
  };

  /**
   * Добавление названия этапа
   */
  handleAdd = name => {
    const item = {
      name
    };

    const stage = [...this.state.stage, item];
    this.setState({ stage });
  };

  /**
   * Render
   */
  render() {
    return (
      <div style={styles.app} className="main">
        {this.state.stage.map(stage => (
          <Stage name={stage.name} />
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

export default App;
