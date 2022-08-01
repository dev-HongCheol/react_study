import React from 'react';
import Counter from '../components/redux/Counter';
import Todos from '../components/redux/Todos';

function ReduxApp() {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default ReduxApp;
