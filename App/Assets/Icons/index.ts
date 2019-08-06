import { ImageStyle, StyleProp } from 'react-native'
import { Icon, IconElement, IconSource } from './icon.component'

export const MenuIconOutline = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/menu-outline.png')
  }

  return Icon(source, style)
}

export const MenuIcon = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/menu.png')
  }

  return Icon(source, style)
}

export const HomeIconOutline = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/home-outline.png')
  }

  return Icon(source, style)
}

export const HomeIcon = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/home.png')
  }

  return Icon(source, style)
}
