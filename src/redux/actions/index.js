export const ADD_STAGE = "ADD_STAGE";

let nextId = 2;

export const addStage = title => {
  return {
    type: ADD_STAGE,
    id: nextId++,
    title
  };
};
