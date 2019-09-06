import players from "./mocks/players.json";
import {
  playersSelector,
  searchTermsSelector,
  filterByAgeSelector,
  filterByNameSelector,
  filterByPositionSelector,
  filterPlayersSelector
} from "./index.js";

describe("players selectors", () => {
  const searchTerms = {
    playerName: "Romelu Lukaku",
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

  it("should filter by age", () => {
    expect(filterByAgeSelector(state)).toEqual(
      state.playersReducer.players.filter(
        player => player.age === state.playersReducer.searchTerms.playerAge
      )
    );
  });

  it("should filter by name", () => {
    expect(filterByNameSelector(state)).toEqual(
      state.playersReducer.players.filter(player =>
        player.name.includes(state.playersReducer.searchTerms.playerName)
      )
    );
  });

  it("should filter by position", () => {
    expect(filterByPositionSelector(state)).toEqual(
      state.playersReducer.players.filter(
        player =>
          player.position === state.playersReducer.searchTerms.playerPosition
      )
    );
  });

  it("should get the expected result", () => {
    const expectedResult = [players[0]];

    expect(filterPlayersSelector(state)).toEqual(expectedResult);
  });

  it("empty age field", () => {
    expect(filterByAgeSelector(emptySearchTermsState)).toEqual(
      playersSelector(state)
    );
  });

  it("empty name field", () => {
    expect(filterByNameSelector(emptySearchTermsState)).toEqual(
      playersSelector(state)
    );
  });

  it("empty position field", () => {
    expect(filterByPositionSelector(emptySearchTermsState)).toEqual(
      playersSelector(state)
    );
  });
});
