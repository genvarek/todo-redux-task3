import React from 'react'
import PropTypes from 'prop-types'

const icon = '\u2716'
const Todo = ({ onClick, text }) => (

  <li>
    <p>{text}</p><button onClick={onClick}>{icon}</button>
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Todo

