import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

const wrap = (props = {}) => shallow(<Title {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap('Redux Todo')
  expect(wrapper.contains('Redux Todo')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
