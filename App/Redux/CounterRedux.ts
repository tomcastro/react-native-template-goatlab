import StoreState, { CounterState } from 'appSrc/Types/StoreState'

import { createActions, createReducer } from 'reduxsauce'
import Immutable, {
  ImmutableObject,
  ImmutableObjectMixin
} from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  increase: null,
  decrease: null
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const initState: CounterState = {
  value: 0
}
export const INITIAL_STATE = Immutable(initState)

/* ------------- Selectors ------------- */

export const counterSelector = (state: StoreState) => state.counter.value

/* ------------- Reducers ------------- */
const inc = (x: number) => x + 1
const dec = (x: number) => x - 1

export const increaseReducer = (state: ImmutableObject<CounterState>) =>
  state.update('value', inc)

export const decreaseReducer = (state: ImmutableObject<CounterState>) =>
  state.update('value', dec)
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREASE]: increaseReducer,
  [Types.DECREASE]: decreaseReducer
})
