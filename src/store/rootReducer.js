import { combineReducers } from 'redux';
import { playersReducer } from '../app-modules/players'

const rootReducer = combineReducers({
  playersReducer
});

export default rootReducer;