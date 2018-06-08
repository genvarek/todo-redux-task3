import React from 'react'
import { storiesOf } from '@storybook/react'
import { App } from 'components'

storiesOf('App', module)
  .add('default', () => (
    <App>Hello</App>
  ))
  .add('reverse', () => (
    <App reverse>Hello</App>
  ))
