import { RETRIEVE_PLAYERS, RETRIEVE_PLAYERS_SUCCESS, RETRIEVE_PLAYERS_FAILURE } from ".";

const retrievePlayers = () => ({
  type: RETRIEVE_PLAYERS
})

const retrievePlayersSuccess = (payload) => ({
  type: RETRIEVE_PLAYERS_SUCCESS,
  payload: payload
})

const retrievePlayersFailure = (payload) => ({
  type: RETRIEVE_PLAYERS_FAILURE,
  payload: payload
})

export default {
  retrievePlayers,
  retrievePlayersSuccess,
  retrievePlayersFailure
}