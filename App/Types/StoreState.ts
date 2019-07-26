import { NavigationState } from 'react-navigation'

interface Counter {
  value: Number
}

export default interface StoreState {
  /**
   * Index refers to the active child route in the routes array.
   */
  nav: NavigationState
  counter: Counter
}
