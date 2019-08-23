import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Reducer,
  StoreEnhancer
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import ScreenTracking from './ScreenTrackingMiddleware'

import Config from 'appSrc/Config/DebugConfig'
import ReduxPersist from 'appSrc/Config/ReduxPersist'
import Rehydration from 'appSrc/Services/Rehydration'
import StoreState from 'appSrc/Types/StoreState'

// creates the store
export default (rootReducer: Reducer<StoreState, AnyAction>, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware: Middleware[] = []
  const enhancers: StoreEnhancer[] = []

  /* ------------- Navigation Middleware ------------ */
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    (state: StoreState) => state.nav
  )
  middleware.push(navigationMiddleware)

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  if (Config.useReactotron) {
    enhancers.push(console.tron.createEnhancer())
  }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  const sagasManager: any = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
