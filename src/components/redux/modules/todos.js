import { createAction, handleActions } from '@reduxjs/toolkit';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let newId = 3;

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

export const insert = createAction(INSERT, (text) => ({
  id: newId++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => (
      produce(state, (draft) => {
        draft.input = input;
      })
    ),
    [INSERT]: (state, { payload: todo }) => (
      produce(state, (draft) => {
        draft.todos.push(todo);
      })
    ),
    [TOGGLE]: (state, { payload: id }) => (
      produce(state, (draft) => {
        const todo = draft.find((_todo) => _todo.id === id);
        todo.done = !todo.done;
      })
    ),
    [REMOVE]: (state, { payload: id }) => (
      produce(state, (drfat) => {
        const index = drfat.todos.findIndex((_todo) => _todo.id === id);
        drfat.todos.splice(index, 1);
      })
    ),
  },
  initialState,
);

/* const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: todos.map(
        (todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo),
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
); */

/*
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

export const insert = (text) => {
  newId += 1;
  return ({
    type: INSERT,
    todo: {
      id: newId,
      text,
      done: false,
    },
  });
};

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      console.log('change', action.input);
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(
          (todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo),
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
*/

export default todos;
