import { NavigationState } from 'react-navigation'

export default interface StoreState {
  /**
   * Index refers to the active child route in the routes array.
   */
  nav: NavigationState
}
