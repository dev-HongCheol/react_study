/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button type="button" onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
};

function Todos({
  input, todos, onChangeInput, onInsert, onToggle, onRemove,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input} />
        <button type="submit">등록</button>
      </form>
      <div>
        {
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Todos;
