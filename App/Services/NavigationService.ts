import { ROUTES } from 'appSrc/Navigation/AppNavigation'
import { has, when } from 'ramda'

import {
  NavigationActions,
  NavigationParams,
  NavigationState
} from 'react-navigation'
import { store } from '../Containers/App'

function navigate(routeName: ROUTES, params?: NavigationParams) {
  store.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function goBack(key?: string) {
  store.dispatch(NavigationActions.back({ key }))
}

const _getCurrentRoute = when(has('index'), (_obj: NavigationState) =>
  _getCurrentRoute(_obj.routes[_obj.index])
)
function getCurrentRoute(): ROUTES {
  const nav = store.getState().nav
  return _getCurrentRoute(nav)
}
// add other navigation functions that you need and export them

// add other navigation functions that you need and export them
export default {
  navigate,
  goBack,
  getCurrentRoute
}
