import React, { useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'
import { NavigationState } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { useDispatch, useSelector } from 'react-redux'
import { navSelector } from '../Redux/NavigationRedux'
import AppNavigation, { FIRST_SCREEN } from './AppNavigation'

createReactNavigationReduxMiddleware(navSelector)

const ReduxAppNavigator = createReduxContainer(AppNavigation)

export default () => {
  const nav: NavigationState = useSelector(navSelector)
  const dispatch = useDispatch()
  const componentWillUnmount = () => {
    if (Platform.OS === 'ios') {
      return
    }
    BackHandler.removeEventListener('hardwareBackPress', () => {})
  }
  const componentDidMount = () => {
    if (Platform.OS === 'ios') {
      return
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && nav.routes[0].routeName === FIRST_SCREEN) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  useEffect(() => {
    componentDidMount()
    return componentWillUnmount
  }, [])

  return <ReduxAppNavigator dispatch={dispatch} state={nav} />
}
