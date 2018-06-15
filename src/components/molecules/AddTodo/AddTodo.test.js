import React from 'react'
import { mount } from 'enzyme'
import AddTodo from './AddTodo'

it('AddTodo', () => {
  const props = {
    onCreateTodo: jest.fn(),
    addTodo: jest.fn(),
  }
  const wrapper = mount(<AddTodo {...props} />)
  wrapper.find('input').instance().value = 'test'

  wrapper.find('form').simulate('submit')
  expect(props.addTodo.mock.calls).toEqual([['test']])
})

