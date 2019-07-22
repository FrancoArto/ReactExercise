import { createSelector } from "reselect";

const playersSelector = state => state.playersReducer.players;
const searchTermsSelector = state => state.playersReducer.searchTerms;

const filterByAgeSelector = createSelector([playersSelector, searchTermsSelector], (players, searchTerms) => {
  let result = players;
  if (searchTerms.playerAge >= 18) {
    result = players.filter(player => player.age === searchTerms.playerAge);
  }
  return result;
});

const filterByNameSelector = createSelector([playersSelector, searchTermsSelector], (players, searchTerms) => {
  let result = players;
  if (searchTerms.playerName !== '') {
    result = players.filter(player => player.name.toLowerCase().includes(searchTerms.playerName.toLowerCase()));
  }
  return result;
});

const filterByPositionSelector = createSelector([playersSelector, searchTermsSelector], (players, searchTerms) => {
  let result = players;
  if (searchTerms.playerPosition !== '') {
    result = players.filter(player => player.position === searchTerms.playerPosition);
  }
  return result;
});

const filterPlayersSelector = createSelector([playersSelector, filterByAgeSelector, filterByNameSelector, filterByPositionSelector],
   (players, filterByAgeResult, filterByNameResult, filterByPositionResult) => {
  const result = players.filter(player => (filterByAgeResult.indexOf(player) >= 0 && filterByNameResult.indexOf(player) >= 0 && filterByPositionResult.indexOf(player) >= 0))

  return result;
});

export default { playersSelector, searchTermsSelector, filterByAgeSelector, filterByNameSelector, filterByPositionSelector, filterPlayersSelector };