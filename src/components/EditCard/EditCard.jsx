import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./EditCard.css";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";

class EditCard extends Component {
  state = {
    editing: true
  };

  handleSaveCard = event => {
    event.preventDefault();
    this.props.history.push("/");
  };
  render() {
    const { steps } = this.props;
    return (
      <div className="edit-block">
        <form className="edit-block__card">
          <Input type="text" defaultValue={steps[0].name} />
          <Input type="text" defaultValue={steps[0].author} />
          <Input type="text" defaultValue={steps[0].time} />
          <Button onClick={this.handleSaveCard}>Сохранить</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditCard);
