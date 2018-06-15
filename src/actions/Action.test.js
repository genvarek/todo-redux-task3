import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import { fetchTodos, deleteTodo, addTodo } from './Actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async action creators', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('fetchTodos async test', (done) => {
    const fetchedData = [{ id: 1, text: 'kek' }]
    const expectedActions = [{ type: 'FETCHED_TODOS', fetchedData }]
    const store = mockStore({ todos: [] })

    store.dispatch(fetchTodos())

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: fetchedData,
      }).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
    })
  })

  it('deleteTodo async test', (done) => {
    const expectedActions = [{ type: 'DELETE_TODO', id: 1 }]
    const store = mockStore({ todos: [] })

    store.dispatch(deleteTodo(1))

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
      }).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
    })
  })


  it('addTodo async test', (done) => {
    const payload = undefined
    const text = 'kek'
    const expectedActions = [{ type: 'ADD_TODO', payload }]
    const store = mockStore({ todos: [] })

    store.dispatch(addTodo(text))

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
      }).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
    })
  })
})
