import { ADD_STAGE } from "../actions/index";

const stageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_STAGE:
      return {
        id: action.id,
        title: action.title
      };
    default:
      return state;
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STAGE:
      return [...state];

    default:
      return state;
  }
};
