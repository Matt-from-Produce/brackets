import React from 'react'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1>brackets</h1>
        <p>
          <Link to='/profile'>Profile</Link>
        </p>
        <input type='text' placeholder='username' />
        <input type='button' value='press' />
      </div>
    )
  }
}

export default Landing
