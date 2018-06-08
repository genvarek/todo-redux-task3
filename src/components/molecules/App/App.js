import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import { font, palette } from 'styled-theme'
import AddTodoContainer from '.../containers/AddTodoContainer'
import VisibleTodoList from '.../containers/VisibleTodoList'
import GetTodos from '.../containers/GetTodos'
import Title from '../atoms/Title/Title'

/* const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const App = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

App.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
} */

const App = () => (
  <div>
    <Title />
    <VisibleTodoList />
    <AddTodoContainer />
    <GetTodos />
  </div>
)

export default App
