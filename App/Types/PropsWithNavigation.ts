import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'

export interface PropsWithNavigation {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
