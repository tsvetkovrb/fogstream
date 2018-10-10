import { connect } from "react-redux";

import { addStage } from "../redux/actions";

import App from "../App";

const mapStateToProps = state => {
  return {
    stage: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (id, title) => dispatch(addStage(id, title))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
