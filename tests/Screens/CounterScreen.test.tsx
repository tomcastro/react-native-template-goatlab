import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import CounterScreen from 'appSrc/Screens/CounterScreen'
import createStore from '../Mocks/createStore'

const createTestProps = (props: Object) => ({
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
        <CounterScreen {...props} />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
