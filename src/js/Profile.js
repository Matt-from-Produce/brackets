import React from 'react'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  render () {
    return (
      <div>
        <h1>Will I ever see this?</h1>
        <Link to='/'>back!</Link>
      </div>
    )
  }
}

export default Profile
