import { players } from "./mocks/players.json";
import {
  RETRIEVE_PLAYERS,
  retrievePlayers,
  RETRIEVE_PLAYERS_SUCCESS,
  retrievePlayersSuccess,
  RETRIEVE_PLAYERS_FAILURE,
  retrievePlayersFailure,
  SET_SEARCHTERMS,
  setSearchTerms,
  getPlayers
} from ".";

const error = "Something happened";
const playersArray = players;
const searchTerms = {
  playerAge: 20,
  playerName: "some name",
  playerPosition: "Centre-Back"
};

describe("action creators", () => {
  it("action should request players", () => {
    const actionOutput = {
      type: RETRIEVE_PLAYERS
    };
    expect(retrievePlayers()).toEqual(actionOutput);
  });

  it("action should return an array of players", () => {
    const actionOutput = {
      type: RETRIEVE_PLAYERS_SUCCESS,
      payload: playersArray
    };
    expect(retrievePlayersSuccess(playersArray)).toEqual(actionOutput);
  });

  it("action should return an object with an error payload", () => {
    const actionOutput = {
      type: RETRIEVE_PLAYERS_FAILURE,
      payload: error
    };
    expect(retrievePlayersFailure(error)).toEqual(actionOutput);
  });

  it("action should set search terms", () => {
    const actionOutput = {
      type: SET_SEARCHTERMS,
      payload: searchTerms
    };
    expect(setSearchTerms(searchTerms)).toEqual(actionOutput);
  });
});

describe("thunk middleware", () => {
  it("retrieves all players", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    await getPlayers()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: RETRIEVE_PLAYERS });
  });
});
