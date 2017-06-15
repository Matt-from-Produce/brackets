import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
// import jwtDecode from 'jwt-decode'

import { AUTH_URL, API_URL } from './constants'

export default class AuthService extends EventEmitter {
  constructor () {
    super()

    this.login = this.login.bind(this)
  }

  _doAuthentication (endpoint, values) {
    return this.fetch(`${AUTH_URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  login (email, password) {
    return this._doAuthentication('login', { email, password })
  }

  signup (user) {
    return this.fetch(`${API_URL}/users/`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  isAuthenticated () {
    // checks if there is a saved token and if it's still valid
    if (typeof (Storage) !== 'undefined') { // HEY: stackoverflow hack to build this on node
      const token = localStorage.getItem('token')
      if (token) {
        return !isTokenExpired(token)
      } else {
        return false
      }
    }
  }

  // isAdmin () {
  //   // TODO implement this in serverside logic?
  //   return jwtDecode(this.getToken()).scope === 'admin'
  // }

  // just sets it in localstorage
  finishAuthentication (token) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('token', token)
    }
  }

  getToken () {
    // retrieve token from localstorage
    if (typeof (Storage) !== 'undefined') {
      return localStorage.getItem('token')
    }
  }

  logout () {
    // remove from local storage and bam, no mas logged in
    if (typeof (Storage) !== 'undefined') {
      localStorage.removeItem('token')
    }
  }

  _checkStatus (res) {
    // raises an error in case res status is not a success
    if (res.status >= 200 && res.status < 300) {
      // success!
      return res
    } else {
      var err = new Error(res.statusText)
      err.response = res
      return err
    }
  }

  fetch (url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.isAuthenticated()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    .then(response => response.json())
  }
}
