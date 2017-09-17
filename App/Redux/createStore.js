import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux'
import { createLogger } from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import RehydrationServices from '../Services/Rehydration/'
import root from '../Saga/'


export default (rootReducer) => {

  const middleware = []
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true,
      diff: true
    })
    middleware.push(logger)
  }

  enhancers.push(applyMiddleware(sagaMiddleware))
  enhancers.push(applyMiddleware(...middleware))
  enhancers.push(autoRehydrate())

  const store = createStore(rootReducer, compose(...enhancers))

  RehydrationServices.updateReducers(store)
  sagaMiddleware.run(root)

  return store
}
