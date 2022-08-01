const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

const chageInput = () => ({
  type: CHANGE_INPUT,
});

let newId = 3;
const insert = (text) => {
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
const toggle = (id) => ({
  type: TOGGLE,
  id,
});
const remove = (id) => ({
  type: REMOVE,
  id,
});

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
