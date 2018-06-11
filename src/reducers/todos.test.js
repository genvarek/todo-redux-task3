import { createStore } from 'redux'
import todos from './todos'
import todoApp from './index'

const testStore = createStore(todoApp)

describe('combineReducers test', () => {
  expect(testStore.getState().todos).toEqual(todos(undefined, {}))
})

describe('todos reducer', () => {
  it('should return default', () => {
    expect(todos([{
      text: 'Run the default tests',
    }], {
      type: 'KEK_TODO',
    })).toEqual([
      { text: 'Run the default tests' },
    ])
  })

  it('should add todos', () => {
    expect(todos({ todos: [] }, {
      type: 'ADD_TODO',
      payload: {
        id: 33,
        text: 'gdrgdhdr',
      },
    })).toEqual({ todos: [{ id: 33, text: 'gdrgdhdr' }] })
  })

  it('should delete todos', () => {
    expect(todos([{
      text: 'Run the delete tests',
      id: 1,
    }], {
      type: 'DELETE_TODO',
      id: 1,
    })).toEqual([])
  })

  it('should fetch todos', () => {
    const fetchedData = { text: 'kek' }
    expect(todos([], {
      type: 'FETCHED_TODOS',
      fetchedData,
    })).toEqual({ todos: { text: 'kek' } })
  })
})
