import React from 'react'
import AddTodoContainer from '.../containers/AddTodoContainer'
import VisibleTodoList from '.../containers/VisibleTodoList'
import GetTodos from '.../containers/GetTodos'
import Title from '../atoms/Title'

const App = () => (
  <div>
    <Title />
    <VisibleTodoList />
    <AddTodoContainer />
    <GetTodos />
  </div>
)

export default App
