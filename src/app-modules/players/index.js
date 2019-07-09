import actionCreators from './actions';
import actionTypes from './actionTypes';

export const { retrievePlayers, retrievePlayersSuccess, retrievePlayersFailure } = actionCreators;
export const { RETRIEVE_PLAYERS, RETRIEVE_PLAYERS_SUCCESS, RETRIEVE_PLAYERS_FAILURE } = actionTypes;

export { default as playersReducer } from './reducer';