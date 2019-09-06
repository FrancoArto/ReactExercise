import { createSelector } from "reselect";
import { allPass, filter, isEmpty, lt, propEq, propSatisfies } from "ramda";

const playersSelector = state => state.playersReducer.players;
const searchTermsSelector = state => state.playersReducer.searchTerms;

const filterPlayersSelector = createSelector(
  [playersSelector, searchTermsSelector],
  (players, searchTerms) => {
    const matchesPlayerAge = player =>
      lt(searchTerms.playerAge, 18)
        ? true
        : propEq("age", searchTerms.playerAge, player);

    const matchesPlayerName = player =>
      isEmpty(searchTerms.playerName)
        ? true
        : propSatisfies(
            prop => prop.toLowerCase().includes(searchTerms.playerName),
            "name",
            player
          );

    const matchesPlayerPosition = player =>
      isEmpty(searchTerms.playerPosition)
        ? true
        : propEq("position", searchTerms.playerPosition, player);

    const predicates = allPass([
      matchesPlayerAge,
      matchesPlayerName,
      matchesPlayerPosition
    ]);
    const result = filter(predicates, players);

    return result;
  }
);

export default { playersSelector, searchTermsSelector, filterPlayersSelector };
