import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import CounterContainer from '../components/redux-middleware/components/CounterContainer';
import loggerMiddleware from '../components/redux-middleware/loggerMiddleware';
import rootReducer from '../components/redux-middleware/moudle';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

function ReduxMiddleApp() {
  return (
    <Provider store={store}>
      <div>ReduxMiddleApp</div>
      <CounterContainer />
    </Provider>
  );
}

export default ReduxMiddleApp;
