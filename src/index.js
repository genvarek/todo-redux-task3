import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { basename } from 'config'
import App from 'components/App'
import reducer from './reducers'


const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}

