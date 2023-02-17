import { GET_MUSIC, GET_MUSIC_LOADING, GET_MUSIC_ERROR } from "../actions";

const initialState = {
  music: [],
  isLoading: true,
  isError: false,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        music: action.playload.data,
      };

    case GET_MUSIC_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_MUSIC_ERROR:
      console.log(action.payload);
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default musicReducer;
