import React, { Component } from 'react'
import T from 'prop-types'
import AuthService from '../utils/AuthService'
// import { browserHistory } from 'react-router'
// import { post } from 'axios'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    // initialize state
    this.state = {
      email: '',
      password: '',
      loggedIn: props.auth.isAuthenticated()
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

  componentWillMount () {
    console.log('loginform mounting')
  }

  componentWillUnmount () {
    console.log('loginform unmounting')
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
      <div className='loginForm'>
        <form onSubmit={this.handleLogin}>
          <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
          <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange} />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default LoginForm
