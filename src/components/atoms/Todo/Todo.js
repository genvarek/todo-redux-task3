import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import { font, palette } from 'styled-theme'

/* const Todo = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Todo.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Todo.defaultProps = {
  palette: 'grayscale',
} */


const icon = '\u2716'
const Todo = ({ onClick, text }) => (

  <li>
    {text}<button onClick={onClick}>{icon}</button>
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Todo

