// import { AnyAction } from 'redux'
// import { Actions, createActions } from 'reduxsauce'
import StoreState from '../Types/StoreState'

// export interface AppTypes {
//   APP_START: 'APP_START'
//   INCREASE_COUNTER: 'INCREASE_COUNTER'
// }

// export interface AppStartAction extends AnyAction {
//   type: AppTypes['APP_START']
//   payload: {}
// }

// export interface SomeParamAction extends AnyAction {
//   type: AppTypes['SOME_PARAM']
//   payload: {
//     thisIsIt: string
//   }
// }

// interface AppActions {
//   appStart(): AppStartAction
//   someParam(thisIsIt: string): SomeParamAction
// }

// export const { Types, Creators } = createActions<AppActions, AppTypes>({
//   appStart: null,
//   someParam: ['thisIsIt']
// })

// Creators.appStart()
// Creators.someParam('things')
import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  increase: [],
  decrease: []
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({ value: 0 })

/* ------------- Selectors ------------- */

export const counterSelector = (state: StoreState) => state.counter.value

/* ------------- Reducers ------------- */
function inc(x) {
  return x + 1
}
function dec(x) {
  return x - 1
}

export const increaseReducer = state => Immutable.update(state, 'value', inc)

export const decreaseReducer = state => Immutable.update(state, 'value', dec)
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREASE]: increaseReducer,
  [Types.DECREASE]: decreaseReducer
})
