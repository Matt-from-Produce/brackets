import React from 'react'

// TODO
/*
  because this component doesn't care about anything anywhere
  we can make it a stateless functional component
*/

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    // initialize state
    this.state = {
      email: '',
      password: ''
    }

    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePassChange (event) {
    this.setState({password: event.target.value})
  }

  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()

    // TODO check inputs against business rules for login info

    // TODO send these things to server

    // TODO if you check out, save the JWT you should be getting back

    console.log(this.state.email)
    console.log(this.state.password)
  }

  render () {
    return (
      <div className='loginForm'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='email' value={this.state.email} onChange={this.handleEmailChange} />
          <input type='password' placeholder='password' value={this.state.password} onChange={this.handlePassChange} />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default LoginForm
