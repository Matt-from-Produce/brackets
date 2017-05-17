import React from 'react'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    // initialize state
    this.state = {
      email: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({[name]: value})
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
          <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
          <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange} />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default LoginForm
