import React from 'react';
import { connect } from 'react-redux';
import {
  increase, decrease, increaseAsync, decreaseAsync,
} from '../moudle/counter';
import Counter from './Counter';

function CounterContainer({ number, increaseAsync, decreaseAsync }) {
  return (
    <div>
      <Counter
        onIncrease={increaseAsync}
        onDecrease={decreaseAsync}
        number={number}
      />
    </div>
  );
}

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer);
