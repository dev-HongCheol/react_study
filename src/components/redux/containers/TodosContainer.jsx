import React from 'react';
import { connect } from 'react-redux';
import {
  changeInput, insert, toggle, remove,
} from '../modules/todos';
import Todos from '../Todos';

function TodosContainer({
  input, todos, changeInput, insert, toggle, remove,
}) {
  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
      />
    </div>
  );
}

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    insert,
    toggle,
    changeInput,
    remove,
  },
)(TodosContainer);
