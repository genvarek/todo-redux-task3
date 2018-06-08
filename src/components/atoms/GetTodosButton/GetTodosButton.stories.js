import React from 'react'
import { storiesOf } from '@storybook/react'
import GetTodosButton from './GetTodosButton'

storiesOf('GetTodosButton', module)
  .add('default', () => (
    <GetTodosButton>Hello</GetTodosButton>
  ))
  .add('reverse', () => (
    <GetTodosButton reverse>Hello</GetTodosButton>
  ))
