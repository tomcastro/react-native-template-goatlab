import { createAppContainer, createStackNavigator } from 'react-navigation'

import CounterScreen from '../../Screens/CounterScreen'
import HomeScreen from '../../Screens/HomeScreen'

export enum ROUTES {
  Home = 'Home',
  Counter = 'Counter'
}
export const FIRST_SCREEN = ROUTES.Home

const PrimaryNav = createStackNavigator(
  {
    [ROUTES.Home]: HomeScreen,
    [ROUTES.Counter]: CounterScreen
  },
  {
    initialRouteName: FIRST_SCREEN,
    headerMode: 'none'
  }
)
export default createAppContainer(PrimaryNav)
