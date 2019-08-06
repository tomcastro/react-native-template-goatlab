import React, { FC } from 'react'
import { Button, List, ListItem, ListItemProps } from 'react-native-ui-kitten'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'

import Container from 'appSrc/Components/Container'
import Header from 'appSrc/Components/Header'
import { ROUTES } from 'appSrc/Navigation/AppNavigation'

import { ListRenderItemInfo } from 'react-native'
import { dependencies } from '../../../package.json'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface Data {
  name: string
  version: string | string[]
}

const data: Data[] = [
  { name: 'React', version: `${dependencies.react}` },
  {
    name: 'React Native',
    version: `${dependencies['react-native']}`
  },
  {
    name: 'UI Kitten',
    version: `${dependencies['react-native-ui-kitten']}`
  },
  {
    name: 'React Navigation',
    version: `${dependencies['react-navigation']}`
  }
]

const renderItem = (
  info: ListRenderItemInfo<any>
): React.ReactElement<ListItemProps> => {
  return <ListItem title={info.item.name} description={info.item.version} />
}

const HomeScreen: FC<Props> = props => {
  return (
    <Container>
      <Header />
      <List data={data} renderItem={renderItem} />
      <Button onPress={() => props.navigation.navigate(ROUTES.Counter)}>
        Navigation test
      </Button>
    </Container>
  )
}

export default HomeScreen
