import { NavigationAction, NavigationState } from 'react-navigation'
import { Reducer } from 'redux'

import AppNavigation from 'appSrc/Navigation/AppNavigation'
import StoreState from 'appSrc/Types/StoreState'

/* ------------- Selectors ------------- */

export const navSelector = (state: StoreState) => state.nav

/* ------------- Reducers ------------- */
export const reducer: Reducer<NavigationState, NavigationAction> = (
  state: NavigationState | undefined,
  action
) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  const newState: NavigationState = AppNavigation.router.getStateForAction(
    action,
    state
  )
  return newState || state
}
