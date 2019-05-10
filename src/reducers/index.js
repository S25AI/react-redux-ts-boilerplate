import { combineReducers } from 'redux';
import { test } from './test';

const rootReducer = combineReducers({
  test,
  another: () => ({})
});

export { rootReducer };
