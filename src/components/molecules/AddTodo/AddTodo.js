import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import { font, palette } from 'styled-theme'

/* const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AddTodo = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

AddTodo.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
} */

const AddTodo = ({ addTodo }) => {
  let input

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
              input = node
            }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
