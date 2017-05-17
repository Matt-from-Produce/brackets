import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1>brackets</h1>
        <p>
          <Link to='/profile'>Profile</Link>
        </p>
        <LoginForm />
      </div>
    )
  }
}

export default Landing
