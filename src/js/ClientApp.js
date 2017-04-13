import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Profile from './Profile'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/profile' component={Profile} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
