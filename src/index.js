import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'

const mountNode = document.getElementById('root')
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  mountNode
)
