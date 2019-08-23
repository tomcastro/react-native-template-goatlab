import StoreState, { CatState } from 'appSrc/Types/StoreState'
import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  catRequest: null,
  catSuccess: ['avatar'],
  catFailure: null
})

export const CatTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const initState: CatState = {
  avatar: undefined,
  fetching: false,
  error: false,
  username: undefined
}

export const INITIAL_STATE = Immutable(initState)

/* ------------- Selectors ------------- */

export const CatSelectors = {
  selectAvatar: (state: StoreState) => state.cat.avatar
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state: ImmutableObject<CatState>, action) =>
  state.merge({ fetching: true, username: action.username, avatar: undefined })

// successful avatar lookup
export const success = (state: ImmutableObject<CatState>, action) =>
  state.merge({ fetching: false, error: undefined, avatar: action.avatar })

// failed to get the avatar
export const failure = (state: ImmutableObject<CatState>) =>
  state.merge({ fetching: false, error: true, avatar: undefined })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CAT_REQUEST]: request,
  [Types.CAT_SUCCESS]: success,
  [Types.CAT_FAILURE]: failure
})
