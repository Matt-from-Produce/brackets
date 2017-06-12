import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Auth from '../utils/AuthService'

const Landing = () => (
  <div className='landing'>
    <h1>brackets</h1>
    <p>
      <Link to='/profile'>Profile</Link>
    </p>
    <LoginForm auth={new Auth()} />
  </div>
)

export default Landing
