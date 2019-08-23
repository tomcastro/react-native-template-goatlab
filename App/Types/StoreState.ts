import { NavigationState } from 'react-navigation'
import { ImmutableObject } from 'seamless-immutable'

export interface CounterState {
  value: number
}

export interface CatState {
  avatar?: string
  fetching: boolean
  error: boolean
  username?: string
}

export default interface StoreState {
  nav: NavigationState
  counter: ImmutableObject<CounterState>
  cat: ImmutableObject<CatState>
}
