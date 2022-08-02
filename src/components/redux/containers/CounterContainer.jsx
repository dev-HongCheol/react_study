import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from '../Counter';
import { decrease, increase } from '../modules/counter';

function CounterContainer({ number, increase, decrease }) {
//   console.log('number', number);
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

CounterContainer.propTypes = {
  number: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

// export default CounterContainer;
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
