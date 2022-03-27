import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function initStore () {
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
      )
      
    sagaMiddleware.run(sagas)
    return store
}