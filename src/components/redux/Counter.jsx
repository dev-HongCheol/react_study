import React from 'react';
import PropTypes from 'prop-types';

function Counter({ number, onIncrease, onDecrease }) {
  console.log('Counter', onIncrease, number);
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button type="button" onClick={onIncrease}> +1</button>
        <button type="button" onClick={onDecrease}> +1</button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default Counter;
