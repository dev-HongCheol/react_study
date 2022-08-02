import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Counter from '../components/redux/Counter';
import Todos from '../components/redux/Todos';
import rootReducer from '../components/redux/modules';
import CounterContainer from '../components/redux/containers/CounterContainer';
import TodosContainer from '../components/redux/containers/TodosContainer';

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
  // enhancers: [batchedSubscribe(debounceNotify)],
});

function ReduxApp() {
  return (
    <Provider store={store}>
      <CounterContainer />

      <hr />
      <TodosContainer />
    </Provider>
  );
}

export default ReduxApp;
