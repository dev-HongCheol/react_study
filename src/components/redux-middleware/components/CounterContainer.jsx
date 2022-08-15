import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../moudle/counter';
import Counter from './Counter';

function CounterContainer({ number, increase, decrease }) {
  return (
    <div>
      <Counter
        onIncrease={increase}
        onDecrease={decrease}
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
    increase,
    decrease,
  },
)(CounterContainer);
