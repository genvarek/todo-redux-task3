import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from './Title'

storiesOf('Title', module)
  .add('default', () => (
    <Title>Hello</Title>
  ))
  .add('reverse', () => (
    <Title reverse>Hello</Title>
  ))
