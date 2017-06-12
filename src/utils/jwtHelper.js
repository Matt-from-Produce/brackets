import decode from 'jwt-decode'

// written by chenkie of Auth0 (industry auth professional)
// https://github.com/chenkie/react-user-authentication/blob/master/src/utils/jwtHelper.js

export function getTokenExpDate (token) {
  const decoded = decode(token)
  if (!decode.exp) {
    return null
  }

  const date = new Date(0) // sets date to epoch
  date.setUTCSeconds(decoded.exp)
  return date
}

export function isTokenExpired (token) {
  const date = getTokenExpDate(token)
  const offsetSeconds = 0
  if (date === null) {
    return false
  }

  return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
}
