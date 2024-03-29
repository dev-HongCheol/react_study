import { createAction, handleActions } from 'redux-actions';
import {
  delay, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

const INCREASE = 'counter/middle-saga/increase';
const DECREASE = 'counter/middle-saga/decrease';
const INCREASE_ASYNC = 'counter/middle-saga/INCREASE';
const DECREASE_ASYNC = 'counter/middle-saga/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState,
);

export default counter;
