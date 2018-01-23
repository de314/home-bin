import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as toastr } from 'react-redux-toastr'

export default combineReducers({
  form,
  toastr,
})

export * from './demo'
