import React from 'react'
import { Button } from 'react-native-elements'

import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { ROUTES } from '../../Navigation/AppNavigation'

export default props => {
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
