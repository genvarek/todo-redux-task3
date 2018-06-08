import { connect } from 'react-redux'
import { addTodo } from '../actions/Actions'
import AddTodo from '../components/molecules/AddTodo/AddTodo'

const mapDispatchToProps = {
  addTodo,
}

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoContainer
