import React, { Component } from 'react'
// import AuthService from '../utils/AuthService'
import Nav from './Nav'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poo: true
    }
  }

  render () {
    return (
      <div>
        <div>
          <h1>Will I ever see this?</h1>
          <Nav />
        </div>
      </div>
    )
  }
}

export default Main
