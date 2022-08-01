/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button type="button">삭제</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
};

function Todos({
  input, todos, onChangeInput, onInsert, onToggle, onRemove,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todos;
