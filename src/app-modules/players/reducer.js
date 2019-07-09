import { RETRIEVE_PLAYERS, RETRIEVE_PLAYERS_SUCCESS, RETRIEVE_PLAYERS_FAILURE } from ".";

const initialState = {
  error: {},
  loading: false,
  players: [],
  results: []
};

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_PLAYERS: {
      return {
        ...state,
        loading: true
      };
    }

    case RETRIEVE_PLAYERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        players: action.payload
      };
    }

    case RETRIEVE_PLAYERS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        players: []
      };
    }

    default: {
      return state;
    }
  }
}

export default playersReducer;