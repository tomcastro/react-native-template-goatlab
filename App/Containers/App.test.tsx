import { shallow } from 'enzyme'
import React from 'react'
import App from './App'

const createTestProps = (props: object) => ({
  ...props
})

describe('App', () => {
  const props = createTestProps({})
  const wrapper = shallow<typeof App | null>(<App {...props} />)

  describe('rendering', () => {
    it('should render a <Fragment />', () => {
      expect(wrapper.find('Fragment')).toHaveLength(1)
    })
  })
})
