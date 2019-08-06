import { HomeIcon, MenuIcon } from 'appSrc/Assets/Icons'
import AppConfig from 'appSrc/Config/AppConfig'
import React from 'react'
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps
} from 'react-native-ui-kitten'

type TopNavigationElement = React.ReactElement<TopNavigationProps>
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>

export default (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      leftControl={renderLeftControl()}
      alignment="center"
      title={AppConfig.appName}
      rightControls={renderRightControls()}
    />
  )
}

const renderLeftControl = (): TopNavigationActionElement => {
  return <TopNavigationAction icon={MenuIcon} />
}

const renderRightControls = (): TopNavigationActionElement[] => {
  return [<TopNavigationAction key={1} icon={HomeIcon} />]
}
