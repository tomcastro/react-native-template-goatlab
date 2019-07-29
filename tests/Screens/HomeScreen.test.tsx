import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import HomeScreen from 'appSrc/Screens/HomeScreen'
import createStore from '../Mocks/createStore'

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

const store = createStore()

test('HomeScreen renders correctly', () => {
  let props: any
  props = createTestProps({})
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen {...props} />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
