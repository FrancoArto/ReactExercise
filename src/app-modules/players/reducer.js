import { RETRIEVE_PLAYERS, RETRIEVE_PLAYERS_SUCCESS, RETRIEVE_PLAYERS_FAILURE, SET_SEARCHTERMS } from ".";
import moment from "moment";

const initialState = {
  error: null,
  loading: false,
  players: [],
  searchTerms: {
    playerAge: 0,
    playerName: '',
    playerPosition: ''
  }
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
        players: action.payload.map(player => ({...player, age: moment().diff(player.dateOfBirth, 'years')}))
      };
    }

    case RETRIEVE_PLAYERS_FAILURE: {
      return {
        ...state,
        error: action.payload || 'Unknown error',
        loading: false,
        players: []
      };
    }

    case SET_SEARCHTERMS: {
      return {
        ...state,
        searchTerms: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export default playersReducer;