import React from 'react'
import { storiesOf } from '@storybook/react'
import Todo from './Todo'

storiesOf('Todo', module)
  .add('default', () => (
    <Todo>Hello</Todo>
  ))
  .add('reverse', () => (
    <Todo reverse>Hello</Todo>
  ))
