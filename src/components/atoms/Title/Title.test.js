import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

const wrap = (props = {}) => shallow(<Title {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap('Redux Todo')
  expect(wrapper.contains('Redux Todo')).toBe(true)
})

it('should render the text', () => {
  const wrapper = wrap(<Title />)
  expect(wrapper.find('h1')).toHaveLength(1)
})

