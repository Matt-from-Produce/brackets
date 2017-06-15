import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import T from 'prop-types'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import AuthService from '../utils/AuthService'

class Landing extends Component {
  constructor (props) {
    super(props)

    this.state = {
      signup: false
    }

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange (event) {
    this.setState({signup: !this.state.signup})
  }

  render () {
    let button = null
    if (this.state.signup) {
      button = <button onClick={this.handleFormChange}>Return to Login</button>
    } else {
      button = <button onClick={this.handleFormChange}>Create an Account</button>
    }

    let form = null
    if (this.state.signup) {
      form = <SignUpForm auth={new AuthService()} />
    } else {
      form = <LoginForm auth={new AuthService()} />
    }

    return (
      <div className='landing'>
        <h1>brackets</h1>
        {form}
        {button}
      </div>
    )
  }
}

export default Landing
