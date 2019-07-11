import { createSelector } from "reselect";

const playersSelector = state => state.players;

const searchPlayersSelector = createSelector([playersSelector], players => (
  players.filter()
))