import React from 'react'
import { Header } from 'react-native-elements'

export default props => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{
        text: `GOATLAB'S BOILERPLATE`,
        style: { color: '#fff' }
      }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}
