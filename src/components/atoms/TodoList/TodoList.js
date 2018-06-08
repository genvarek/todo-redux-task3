import PropTypes from 'prop-types'
import React from 'react'
import Todo from '../Todo/Todo'
// import styled from 'styled-components'
// import { font, palette } from 'styled-theme'

/* const TodoList = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

TodoList.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

TodoList.defaultProps = {
  palette: 'grayscale',
} */

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
