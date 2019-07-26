import React from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './ContainerStyles'

export default ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  )
}
