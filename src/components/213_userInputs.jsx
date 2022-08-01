import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function userInputs(initiaForm) {
  const [state, dispatch] = useReducer(reducer, initiaForm);
  const onChange = (e) => dispatch(e.target);
  return [state, onChange];
}
