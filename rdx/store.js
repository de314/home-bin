/**
 * Included Features:
 *   - Redux Form:
 *       - form state in redux
 *       - https://redux-form.com/7.2.1/docs/gettingstarted.md/
 *   - Relelect:
 *       - memoization library to optimize derived state selectors
 *       - https://github.com/reactjs/reselect
 *   - React Redux Toastr:
 *       - dispact actions to display ui notifications
 *       - https://github.com/diegoddox/react-redux-toastr
 *
 * Optional Features:
 *   - Redux Saga
 *       - Powerful library for managing complex asynchronous action sagas
 *       - https://redux-saga.js.org/
 */

import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from './state'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()

const middleware = [
  /*sagaMiddleware */
]

const persistedSlices = ['auth']

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(...middleware),
    persistState(persistedSlices),
  ),
)

// sagaMiddleware.run(mySaga)

export default store
