import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { Layout } from 'react-native-ui-kitten'
import styles from './ContainerStyles'

interface ContainerProps {
  children: JSX.Element[] | JSX.Element
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>{children}</Layout>
    </SafeAreaView>
  )
}
export default Container
