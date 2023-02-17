export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_MUSIC = "GET_MUSIC";
export const GET_MUSIC_LOADING = "GET_MUSIC_LOADING";
export const GET_MUSIC_ERROR = "GET_MUSIC_ERROR";

export const addToFavouriteAction = (musicSelected) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: musicSelected,
  };
};

export const removeFromFavouriteAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};

export const getMusicActionAsync = (query) => {
  return async (dispatch, getState) => {
    console.log(query);
    dispatch({
      type: GET_MUSIC_LOADING,
      playload: true,
    });

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (response.ok) {
        let fetchedMusic = await response.json();
        dispatch({
          type: GET_MUSIC,
          playload: fetchedMusic,
        });
        dispatch({
          type: GET_MUSIC_LOADING,
          playload: false,
        });
      } else {
        alert("Error fetching results");
        dispatch({
          type: GET_MUSIC_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MUSIC_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_MUSIC_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_MUSIC_ERROR,
        payload: true,
      });
    }
  };
};
