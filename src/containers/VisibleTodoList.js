import { connect } from 'react-redux'
import { deleteTodo } from '../actions/Actions'
import TodoList from '../components/atoms/TodoList/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  onTodoClick: deleteTodo,
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
