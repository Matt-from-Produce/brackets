import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'
import Landing from './Landing'
import Profile from './Profile'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route path='/profile' component={Profile} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
