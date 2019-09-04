import { combineReducers } from 'redux';
import { playersReducer } from '../app-modules/players'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  playersReducer,
  form: formReducer
});

export default rootReducer;