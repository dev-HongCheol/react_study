import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../Counter';
import { decrease, increase } from '../modules/counter';

// function CounterContainer({ number, increase, decrease }) {
function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  console.log('container', number, increase);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
}

export default CounterContainer;

/*
// 기본. prop으로 state와 함수를 넘긴다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

/*
// map..props를 생성하지 않고 connet + bindActionCreator로 리팩토링.
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  ),
)(CounterContainer); */

/*
// connect의 DispatchProp을 객체형태로 넘겨 리팩토링
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
*/
