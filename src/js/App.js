import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './Landing'
import Main from './Main'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  max-width: 640px;
`

const App = () => (
  <Wrapper>
    <Route exact path='/' component={Landing} />
    <Route path='/main' component={Main} />
  </Wrapper>
)

export default App
