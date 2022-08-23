import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter from './counter';
import sample from './sample';
import loading from './loading';
import * as saga from './counter-saga';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([saga.counterSaga]);
}

export default rootReducer;
