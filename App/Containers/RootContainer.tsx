import React from 'react'
import { StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'

export default () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ReduxNavigation />
    </>
  )
}
