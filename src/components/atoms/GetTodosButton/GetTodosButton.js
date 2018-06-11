import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import { font, palette } from 'styled-theme'

/* const GetTodosButton = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

GetTodosButton.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

GetTodosButton.defaultProps = {
  palette: 'grayscale',
} */

const GetTodosButton = ({ onClick }) => (
  <button onClick={onClick}>Get Todos</button>
)

GetTodosButton.propTypes = {
  onClick: PropTypes.object.isRequired,
}

export default GetTodosButton
