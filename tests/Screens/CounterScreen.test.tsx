import { light, mapping } from '@eva-design/eva'
import React from 'react'
import { ApplicationProvider } from 'react-native-ui-kitten'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import CounterScreen from 'appSrc/Screens/CounterScreen'
import createStore from '../Mocks/createStore'

const createTestProps = (props: {}) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

const store = createStore()

test('CounterScreen renders correctly', () => {
  let props: any
  props = createTestProps({})
  const tree = renderer
    .create(
      <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={light}>
          <CounterScreen {...props} />
        </ApplicationProvider>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
