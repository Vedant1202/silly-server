/** @format */

import { combineReducers } from 'redux';

import sillyRangeValuesReducer from './silly-range-values/silly-range-values.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  sillyRangeValues: sillyRangeValuesReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

export default persistReducer(persistConfig, rootReducer);
