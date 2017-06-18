import React, { Component } from 'react'
import AuthService from '../utils/AuthService'
import { emailRegex } from '../utils/constants'
import T from 'prop-types'

class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  handleInputChange (event) {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit (event) {
    event.preventDefault()

    if (this.bueno()) {
      const { auth } = this.props
      const s = this.state
      const user = {
        name: s.name,
        email: s.email,
        password: s.password1
      }
      auth.signup(user).then(user => {
        console.log('user created')
        console.log(user)
        this.context.router.history.push('./main')
      })
      .catch(err => {
        console.log('error creating user?')
        console.log(err)
      })
    }
  }

  checkName (name) {
    return name.length > 1 && name.length < 20
  }

  checkEmail (email) {
    return email.match(emailRegex)
  }

  checkPassword (pw) {
    return pw.length > 5 && pw.length < 20
  }

  checkPasswordMatch (pw1, pw2) {
    return pw1 === pw2
  }

  bueno () {
    const { name, email, password1, password2 } = this.state
    return (
      this.checkName(name) &&
      this.checkEmail(email) &&
      this.checkPassword(password1) &&
      this.checkPassword(password2) &&
      this.checkPasswordMatch(password1, password2)
    )
  }

  render () {
    let bueno = this.bueno()
    let output = ''
    if (!bueno) {
      output = 'no bueno'
    } else {
      output = 'bueno'
    }

    return (
      <div className='SignUpForm'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              name='password1'
              placeholder='Enter your password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={this.state.password2}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type='submit'
              value='Submit'
              disabled={!bueno}
            />
          </div>
        </form>
        <h3>Status: {output}</h3>
      </div>
    )
  }
}

export default SignUpForm
