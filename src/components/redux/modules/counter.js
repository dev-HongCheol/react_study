import { createAction, createSlice, createReducer } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;

/* const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
  },
});
export const { increase, decrease } = counter.actions;
export default counter.reducer;
*/

/* const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const counter = createReducer(initialState, (builder) => {
  builder
    .addCase(increase, (state, action) => {
      state.number++;
    })
    .addCase(decrease, (state, action) => {
      state.number--;
    });
});

export default counter; */

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
