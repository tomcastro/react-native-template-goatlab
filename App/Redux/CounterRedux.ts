import StoreState from 'appSrc/Types/StoreState'

import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  increase: null,
  decrease: null
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
