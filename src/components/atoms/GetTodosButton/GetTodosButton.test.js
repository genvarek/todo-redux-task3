import React from 'react'
import { shallow } from 'enzyme'
import GetTodosButton from './GetTodosButton'

const wrap = (props = {}) => shallow(<GetTodosButton {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'Get Todos' })
  expect(wrapper.contains('Get Todos')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ onClick: {} })
  expect(wrapper.find({ onClick: {} })).toHaveLength(1)
})
