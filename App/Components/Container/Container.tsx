import React, { FC } from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './ContainerStyles'

interface ContainerProps {
  children: JSX.Element[] | JSX.Element
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  )
}
export default Container
