import React, { Component } from 'react'
import MainMenu from './MainMenu'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navType: false
    }
  }

  componentDidMount () {
    // i want to know which route the user is on so i can know which menu
    // so if i just get that from props, i dont need state here?
  }

  // nav holds a menu
  // and other things
  // like nav can have your account name above the menu
  // and then some small user info like 'current brackets: 1'
  // then an hr
  // then the menu item
  // so nav needs to render the menu
  // it can pass what kind of menu it needs based on props that this will recieve
  // the nav is specific to a route
  // the mainmenu will only be displayed on the /main route

  // menu holds the different types of menus
  // different types of menues are like MainMenu or BracketMenu or UserMenu
  // all functions can be found in the menu
  // to the right of the menu can be the contents of one of the items on the menu
  // for instance 'overview' item of the UserMenu

  render () {
    // if mainmenu
    // set currentNav equal to
    return (
      <div className='nav'>
        <MainMenu />
      </div>
    )
  }
}

export default Nav
