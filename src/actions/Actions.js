import axios from 'axios'

export function fetchTodos() {
  return dispatch =>
    axios.get('http://localhost:3001/todos')
      .then((response) => {
        const fetchedData = response.data
        dispatch({ type: 'FETCHED_TODOS', fetchedData })
      })
}


export function deleteTodo(id) {
  return dispatch =>
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(dispatch({ type: 'DELETE_TODO', id }))
}


export function addTodo(text) {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/todos/',
      data: {
        text,
      },
    }).then((response) => {
      dispatch({ type: 'ADD_TODO', payload: response.data })
    })
  }
}
