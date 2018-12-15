import React from 'react'
import { Route, Link } from 'react-router-dom'
import Main from './Main'
import About from './About'

const App = props => (
  <React.Fragment>
    <h1>Reactron Boilerplate</h1>
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>

    <hr />

    <Route path="/" exact component={Main} />
    <Route path="/about/" component={About} />
  </React.Fragment>
)

export default App
