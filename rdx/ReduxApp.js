import React from 'react'
import store from './store'

import { Provider } from 'react-redux'

import 'react-redux-toastr/src/styles/index.css'

// pulled from https://github.com/diegoddox/react-redux-toastr
const defaultToasterConfig = {
  timeOut: 5000,
  newestOnTop: true,
  position: 'top-right',
  transitionIn: 'bounceIn',
  transitionOut: 'bounceOut',
  progressBar: false,
}

const ReduxApp = ({ children }) => (
  <div className="ReduxApp">
    <Provider store={store}>
      <ReduxToastr {...defaultToasterConfig} />
      {children}
    </Provider>
  </div>
)

export default ReduxApp
