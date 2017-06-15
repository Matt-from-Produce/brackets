import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './Landing'
import Main from './Main'

const App = () => (
  <div className='app'>
    <Route exact path='/' component={Landing} />
    <Route path='/main' component={Main} />
  </div>
)

export default App
