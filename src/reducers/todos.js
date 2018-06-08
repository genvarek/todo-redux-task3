const todos = (state = {
  todos: [],
}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: action.payload.id, text: action.payload.text }],
      }
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
    case 'FETCHED_TODOS':
      return Object.assign({}, state, { todos: action.fetchedData })
    default:
      return state
  }
}
export default todos
