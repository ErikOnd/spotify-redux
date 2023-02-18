import { ADD_TO_SELECTED } from "../actions";

const initialState = {
  selected: {},
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SELECTED:
      console.log(action.payload);
      return {
        album: action.payload,
      };
    default:
      return state;
  }
};

export default selectedReducer;
