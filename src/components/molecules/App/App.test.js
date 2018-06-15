import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Title from '../../atoms/Title/Title'

const wrap = (props = {}) => shallow(<App {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains(<Title />)).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap(<App />)
  expect(wrapper.find(Title)).toHaveLength(1)
})
