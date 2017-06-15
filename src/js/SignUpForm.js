import React, { Component } from 'react'
import AuthService from '../utils/AuthService'
import T from 'prop-types'

class SignUpForm extends Component {
  constructor (props) {
    super(props)
    console.log('hello from constructor')
    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: '',
      buenoName: false,
      buenoEmail: false,
      buenoPw1: false,
      buenoPw2: false,
      buenoMatch: false,
      message: 'sec',
      conditions: 0,
      bueno: false
    }

    this.handlePassword1Change = this.handlePassword1Change.bind(this)
    this.handlePassword2Change = this.handlePassword2Change.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  componentWillMount () {
    console.log('signup mounting')
  }

  componentWillUnmount () {
    console.log('signup unmounting')
  }

  handleNameChange (event) {
    event.preventDefault()
    const name = event.target.value
    this.setState({name: name})

    // names must be at least two alphabetical letters and not too long
    if (name.length > 1 && name.length < 15) {
      this.setState({buenoName: true})
    } else {
      this.setState({buenoName: false})
    }

    this.checkBueno()
  }

  handleEmailChange (event) {
    event.preventDefault()
    const email = event.target.value
    this.setState({email: email})

    // TODO -- email regex
    if (email.length > 4 && email.length < 25) {
      this.setState({buenoEmail: true})
    } else {
      this.setState({buenoEmail: false})
    }

    this.checkBueno()
  }

  handlePassword1Change (event) {
    event.preventDefault()
    const pw1 = event.target.value
    this.setState({password1: pw1})

    // more than 5 but not too long
    if (pw1.length > 5 && pw1.length < 13) {
      this.setState({buenoPw1: true})
    } else {
      this.setState({buenoPw1: false})
    }

    this.checkBueno()
  }

  handlePassword2Change (event) {
    event.preventDefault()
    const pw2 = event.target.value
    this.setState({password2: pw2})

    // more than 5 but not too long
    if (pw2.length > 5 && pw2.length < 13) {
      this.setState({buenoPw2: true})
    } else {
      this.setState({buenoPw2: false})
    }

    this.checkBueno()
  }

  checkBueno () {
    const { buenoName, buenoEmail, buenoPw1, buenoPw2 } = this.state
    if (buenoName && buenoEmail && buenoPw1 && buenoPw2) {
      console.log('bueno')
      this.setState({message: 'bueno'})
      this.setState({bueno: true})
    } else {
      console.log('no bueno')
      this.setState({message: 'no bueno'})
      this.setState({bueno: false})
    }
  }

  handleSubmit (event) {
    console.log('hello from handleSubmit')
    event.preventDefault()

    if ((this.state.password1 === this.state.password2) && this.state.bueno) {
      this.setState({message: 'creating account'})
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
    } else {
      this.setState({message: 'poo input'})
    }
  }

  render () {
    console.log('hello from render')
    return (
      <div className='SignUpForm'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type='text'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type='password'
            name='password1'
            placeholder='Choose password'
            value={this.state.password}
            onChange={this.handlePassword1Change}
          />
          <input
            type='password'
            name='password2'
            placeholder='Confirm password'
            value={this.state.password2}
            onChange={this.handlePassword2Change}
          />
          <input
            type='submit'
            value='Submit'
          />
        </form>
        <h3>Status: {this.state.message}</h3>
      </div>
    )
  }
}

export default SignUpForm
