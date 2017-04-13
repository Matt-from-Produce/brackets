import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>brackets</h1>
        <h2>login</h2>
        <input type='text' placeholder='username' />
        <input type='button' value='press' />
      </div>
    )
  }
})

export default Landing
