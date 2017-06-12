import React from 'react'
import T from 'prop-types'
import AuthService from '../utils/AuthService'
// import { post } from 'axios'

class LoginForm extends React.Component {
  constructor (context) {
    super()

    console.log(this.props)

    // initialize state
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    // loggedIn: T.bool,
    auth: T.instanceOf(AuthService)
  }

  handleInputChange (event) {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit (event) {
    event.preventDefault()

    // TODO check inputs against business rules for login info
    const { email, password } = this.state

    // send credentials to server to get token
    if (email && password) {
      this.props.auth.login(email, password)
      .then((res) => {
        if (!res.token) {
          console.log(res.message)
        } else {
          this.props.auth.finishAuthentication(res.token)
          this.setState({loggedIn: true})
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  render () {
    return (
      <div className='loginForm'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
          <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange} />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default LoginForm
