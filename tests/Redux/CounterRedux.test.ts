import CounterActions, { reducer } from 'appSrc/Redux/CounterRedux'
import { createStore } from 'redux'

const store = createStore(reducer)

describe('state', () => {
  it('should get initial state', () => {
    const state = store.getState()
    expect(state.value).toEqual(0)
  })
})

describe('dispatch increase', () => {
  it('should increase state by 1', () => {
    store.dispatch(CounterActions.increase())
    const state = store.getState()
    expect(state.value).toEqual(1)
  })
})

describe('dispatch decrease', () => {
  it('should decrease state by 1', () => {
    store.dispatch(CounterActions.decrease())
    const state = store.getState()
    expect(state.value).toEqual(0)
  })
})
