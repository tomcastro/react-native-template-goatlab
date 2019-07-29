import React, { FC } from 'react'
import { StatusBar } from 'react-native'

import ReduxNavigation from 'appSrc/Navigation/ReduxNavigation'

const RootContainer: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ReduxNavigation />
    </>
  )
}

export default RootContainer
