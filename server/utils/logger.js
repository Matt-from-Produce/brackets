// this is Scott Moss's logger wrapper
var config = require('../config/config')
var _ = require('lodash')

// create a noop function for when loggin is disabled
// noop = no operation
var noop = function(){}

// check if logging is enabled in the config
var consoleLog = config.logging ? console.log.bind(console) : noop

var logger = {
  log: function() {
    // args is an array like object with all the passed in args to this function
    var args = _.toArray(arguments)
    .map(function(arg) {
      if (typeof arg === 'object') {
        // turn the object into a string so we can log all properties
        // with colors!
        var string = JSON.stringify(arg, 2)
        return string
      } else {
        // coerce string to color
        arg+=''
        return arg
      }
    })

    // call either console.log or noop here
    consoleLog.apply(console, args)
  }
}

module.exports = logger
