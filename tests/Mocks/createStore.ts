import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({
  counter: require('appSrc/Redux/CounterRedux').INITIAL_STATE
})

export default () => store
