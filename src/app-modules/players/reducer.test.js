import playersReducer from "./reducer";
import {
  retrievePlayers,
  retrievePlayersSuccess,
  retrievePlayersFailure,
  setSearchTerms
} from ".";
import players from "./mocks/players.json";

describe("players reducer", () => {
  const initialState = {
    error: {},
    loading: false,
    players: [],
    searchTerms: {
      playerAge: 0,
      playerName: "",
      playerPosition: ""
    }
  };

  it("should request players", () => {
    const expectedOutput = {
      ...initialState,
      loading: true
    };
    expect(playersReducer(initialState, retrievePlayers())).toEqual(
      expectedOutput
    );
  });

  it("should save players to state", () => {
    const reducerInput = players;
    const expectedOutput = {
      ...initialState,
      players: players,
      loading: false
    };
    expect(
      playersReducer(initialState, retrievePlayersSuccess(reducerInput))
    ).toEqual(expectedOutput);
  });

  it("should set error to state", () => {
    const error = "something happened";
    const expectedOutput = {
      ...initialState,
      players: [],
      loading: false,
      error: error
    };
    expect(playersReducer(initialState, retrievePlayersFailure(error))).toEqual(
      expectedOutput
    );
  });

  it("should set search terms", () => {
    const searchTerms = {
      playerAge: 20,
      playerName: "Sergio Romero",
      playerPosition: "Keeper"
    };

    const expectedOutput = {
      ...initialState,
      searchTerms: searchTerms
    };

    expect(playersReducer(initialState, setSearchTerms(searchTerms))).toEqual(
      expectedOutput
    );
  });
});
