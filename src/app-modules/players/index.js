import actionCreators from "./actions";
import actionTypes from "./actionTypes";
import constants from "./constants";
import selectors from "./selectors";

export const {
  getPlayers,
  retrievePlayers,
  retrievePlayersFailure,
  retrievePlayersSuccess,
  setSearchTerms
} = actionCreators;
export const {
  RETRIEVE_PLAYERS,
  RETRIEVE_PLAYERS_SUCCESS,
  RETRIEVE_PLAYERS_FAILURE,
  SET_SEARCHTERMS
} = actionTypes;
export const { PLAYERS_URL } = constants;

export const {
  playersSelector,
  searchTermsSelector,
  filterByAgeSelector,
  filterByNameSelector,
  filterByPositionSelector,
  filterPlayersSelector
} = selectors;
export { default as playersReducer } from "./reducer";
