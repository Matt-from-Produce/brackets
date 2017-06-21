import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import T from 'prop-types'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import AuthService from '../utils/AuthService'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  padding: 20px;
`

const Title = styled.h1`
  display: block;
  text-align: center;
`

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
      <Wrapper>
        <Title>brackets</Title>
        {form}
        {button}
      </Wrapper>
    )
  }
}

export default Landing
