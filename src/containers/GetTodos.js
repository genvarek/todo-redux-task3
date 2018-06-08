import { connect } from 'react-redux'
import { fetchTodos } from '../actions/Actions'
import GetTodosButton from '../components/atoms/GetTodosButton/GetTodosButton'

const mapDispatchToProps = {
  onClick: fetchTodos,
}

const GetTodos = connect(null, mapDispatchToProps)(GetTodosButton)

export default GetTodos
