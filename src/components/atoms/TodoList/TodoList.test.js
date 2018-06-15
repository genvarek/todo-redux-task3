import React from 'react'
import { mount } from 'enzyme'
import TodoList from './TodoList'

/* const wrap = (props = {}) => shallow(<TodoList {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
}) */


it('TodoList', () => {
  const props = {
    onTodoClick: jest.fn(),
    todos: {
      todos: [{
        id: 1,
        text: 'trgrtht',
      }],
    },
    key: 'foo',
  }
  const wrapper = mount(<TodoList {...props} />)
  expect(wrapper.find('li').contains('trgrtht')).toEqual(true)

  wrapper.find('button').simulate('click')
  expect(props.onTodoClick).toHaveBeenCalled()
})
