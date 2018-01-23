import _ from 'lodash'
// import { ACTION_NAME } from 'rdx/actions'

const selectSlice = state => _.get(state, 'demo')

export const selectTesting = state => selectSlice(state).testing

const defaultState = {
  testing: true,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    //case ACTION_NAME: {
    //  return {
    //    ...state,
    //    testing: action.testing
    //  }
    //}

    default:
  }
  return state
}
