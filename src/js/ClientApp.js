import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Profile from './Profile'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Landing />
        <Profile />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
