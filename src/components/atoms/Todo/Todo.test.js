import React from 'react'
import { shallow } from 'enzyme'
import Todo from './Todo'

const props = {
  onClick: jest.fn(),
  text: 'kek',
}
const wrap = shallow(<Todo {...props} />)

describe('test', () => {
  it('renders children when passed in', () => {
    wrap.find('button').simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })

  it('renders props when passed in', () => {
    expect(wrap.contains('kek')).toEqual(true)
  })

  it('to match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
