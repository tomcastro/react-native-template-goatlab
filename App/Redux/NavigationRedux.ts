import { AnyAction, Reducer } from 'redux'

import AppNavigation from '../Navigation/AppNavigation'
import StoreState from '../Types/StoreState'

type StateInput = Partial<StoreState>

export const navReducer: Reducer<StoreState> = (
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
