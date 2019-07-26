import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import CounterScreen from '../../Screens/CounterScreen'
import HomeScreen from '../../Screens/HomeScreen'

export enum ROUTES {
  Home = 'Home',
  Counter = 'Counter'
}
export const FIRST_SCREEN = ROUTES.Home

const PrimaryNav = createSwitchNavigator(
  {
    [ROUTES.Home]: HomeScreen,
    [ROUTES.Counter]: CounterScreen
  },
  {
    initialRouteName: FIRST_SCREEN
  }
)
export default createAppContainer(PrimaryNav)
