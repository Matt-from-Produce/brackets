import React, { Component } from 'react'
import T from 'prop-types'
import AuthService from '../utils/AuthService'
import styled from 'styled-components'
// import { browserHistory } from 'react-router'
// import { post } from 'axios'

const Wrapper = styled.div`
  margin: auto;
`

const FormField = styled.div`
  display: block;
  padding-top: 1em;
  padding-bottom: 1em;
`

const Label = styled.label`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
`

const Input = styled.input`
  border: none;
  padding: 0.5em;
  color: black;
  background-color: lightcyan;
`

const InputButton = styled.input`
  padding-top: 1em;
  padding-bottom: 1em;
`

class LoginForm extends Component {
  constructor (props) {
    super(props)

    // initialize state
    this.state = {
      email: '',
      password: '',
      loggedIn: false // TODO remove. this is a reflection of the prop 'auth' maybe?
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  componentDidMount () {
    this.setState({loggedIn: this.props.auth.isAuthenticated()})
  }

  handleInputChange (event) {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleLogin (event) {
    console.log('hello from handleLogin')
    event.preventDefault()

    // TODO check inputs against business rules for login info
    const { email, password } = this.state

    // send credentials to server to get token
    if (email && password) {
      console.log('sending request')
      this.props.auth.login(email, password)
      .then((res) => {
        if (!res.token) {
          console.log(res.message)
        } else {
          this.props.auth.finishAuthentication(res.token)
          this.setState({loggedIn: true})
          this.context.router.history.push('/main')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  handleLogout (event) {
    event.preventDefault()
    this.props.auth.logout()
    this.setState({loggedIn: false})
  }

  render () {
    if (this.state.loggedIn) {
      return (
        <div className='loginForm'>
          <h1>you are logged in</h1>
          <form onSubmit={this.handleLogout}>
            <input type='submit' value='Logout' />
          </form>
        </div>
      )
    }

    return (
      <Wrapper>
        <form onSubmit={this.handleLogin}>
          <FormField>
            <Label>Email</Label>
            <Input
              type='text'
              name='email'
              placeholder='Enter your email'
              value={this.state.email}
              onChange={this.handleInputChange} />
          </FormField>
          <FormField>
            <Label>Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={this.state.password}
              onChange={this.handleInputChange} />
          </FormField>
          <FormField>
            <InputButton
              type='submit'
              value='Login' />
          </FormField>
        </form>
      </Wrapper>
    )
  }
}

export default LoginForm
