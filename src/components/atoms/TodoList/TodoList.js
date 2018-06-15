import PropTypes from 'prop-types'
import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
)


TodoList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.array).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
