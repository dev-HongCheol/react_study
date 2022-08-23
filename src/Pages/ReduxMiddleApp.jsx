import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import CounterContainer from '../components/redux-middleware/components/CounterContainer';
import SampleContainer from '../components/redux-middleware/components/SampleContainer';
import loggerMiddleware from '../components/redux-middleware/loggerMiddleware';
import rootReducer, { rootSaga } from '../components/redux-middleware/moudle';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

function ReduxMiddleApp() {
  return (
    <Provider store={store}>
      <div>ReduxMiddleApp</div>
      <CounterContainer />
      <SampleContainer />
    </Provider>
  );
}

export default ReduxMiddleApp;
