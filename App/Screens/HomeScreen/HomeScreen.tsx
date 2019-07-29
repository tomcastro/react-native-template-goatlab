import React, { FC } from 'react'
import { Button } from 'react-native-elements'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'

import Container from 'appSrc/Components/Container'
import Header from 'appSrc/Components/Header'
import { ROUTES } from 'appSrc/Navigation/AppNavigation'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const HomeScreen: FC<Props> = props => {
  return (
    <>
      <Header />
      <Container>
        <Button
          title="Navigation test"
          onPress={() => props.navigation.navigate(ROUTES.Counter)}
        />
      </Container>
    </>
  )
}

export default HomeScreen
