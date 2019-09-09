import players from "./mocks/players.json";
import {
  playersSelector,
  searchTermsSelector,
  filterPlayersSelector
} from "./index.js";

describe("players selectors", () => {
  const searchTerms = {
    playerName: "romelu lukaku",
    playerPosition: "Centre-Forward",
    playerAge: 26
  };

  const state = {
    playersReducer: {
      loading: false,
      error: {},
      players: players,
      searchTerms: searchTerms
    }
  };

  const emptySearchTermsState = {
    playersReducer: {
      loading: false,
      error: {},
      players: players,
      searchTerms: {
        playerAge: 0,
        playerName: "",
        playerPosition: ""
      }
    }
  };

  it("should retrieve all players from state", () => {
    expect(playersSelector(state)).toEqual(state.playersReducer.players);
  });

  it("should retrieve search terms from state", () => {
    expect(searchTermsSelector(state)).toEqual(searchTerms);
  });

  it("should get the expected result", () => {
    const expectedResult = [players[0]];

    expect(filterPlayersSelector(state)).toEqual(expectedResult);
  });

  it("empty fields", () => {
    expect(filterPlayersSelector(emptySearchTermsState)).toEqual(
      playersSelector(state)
    );
  });

});
