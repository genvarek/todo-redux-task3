import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
// import { HomePage } from 'components'
import Title from '../components/atoms/Title/Title'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodoContainer from '../containers/AddTodoContainer'
import GetTodos from '../containers/GetTodos'

// https://github.com/diegohaz/arc/wiki/Styling
// import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    /* <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </ThemeProvider> */
    <div>
      <Title />
      <VisibleTodoList />
      <AddTodoContainer />
      <GetTodos />
    </div>
  )
}

export default App
