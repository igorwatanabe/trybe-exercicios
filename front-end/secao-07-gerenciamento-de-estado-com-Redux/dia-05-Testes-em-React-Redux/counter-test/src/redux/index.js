import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, legacy_createStore as createStore } from 'redux';

import counterReducer from './reducers/counterReducer';

const store = createStore(
  combineReducers({ counterReducer }),
  composeWithDevTools()
);

export default store;
