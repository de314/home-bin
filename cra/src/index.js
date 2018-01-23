import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'
import App from 'App'

import 'index.css'
import 'react-select/dist/react-select.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)
