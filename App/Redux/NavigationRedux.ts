import { AnyAction, Reducer } from 'redux'

import AppNavigation from '../Navigation/AppNavigation'
import StoreState from '../Types/StoreState'

/* ------------- Selectors ------------- */

export const navSelector = (state: StoreState) => state.nav

/* ------------- Reducers ------------- */
export const reducer: Reducer<StoreState> = (
  state: StoreState | undefined,
  action
) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  const newState: StoreState = AppNavigation.router.getStateForAction(
    action,
    state
  )
  return newState || state
}
