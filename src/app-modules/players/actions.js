import axios from 'axios';
import { RETRIEVE_PLAYERS, RETRIEVE_PLAYERS_SUCCESS, RETRIEVE_PLAYERS_FAILURE, SET_SEARCHTERMS } from ".";
import { PLAYERS_URL } from ".";
import moment from 'moment';

const retrievePlayers = () => ({
  type: RETRIEVE_PLAYERS
});

const retrievePlayersSuccess = (payload) => ({
  type: RETRIEVE_PLAYERS_SUCCESS,
  payload: payload
});

const retrievePlayersFailure = (payload) => ({
  type: RETRIEVE_PLAYERS_FAILURE,
  payload: payload
});

const setSearchTerms = (payload) => ({
  type: SET_SEARCHTERMS,
  payload: payload
})

const getPlayers = () => {
  return dispatch => {
    dispatch(retrievePlayers())
    axios.get(PLAYERS_URL)
      .then((response) => {
        dispatch(retrievePlayersSuccess(response.data.map(player => ({...player, age: moment().diff(player.dateOfBirth, 'years')}))))
      })
      .catch((response) => {
        dispatch(retrievePlayersFailure(response.data))
      })
  }
}


export default {
  getPlayers,
  retrievePlayers,
  retrievePlayersSuccess,
  retrievePlayersFailure,
  setSearchTerms
}