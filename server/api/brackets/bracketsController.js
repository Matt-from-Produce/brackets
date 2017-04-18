var User = require('../users/usersModel')
var Bracket = require('./bracketsModel')
var _ = require('lodash')

module.exports = {
  params: function (err, req, res, next, id) {
    var promise = Bracket.findById(id).exec()
    promise
    .then(function(Bracket) {
      console.log('got a Bracket!!!!')
      logger.log(Bracket)
    })
    .catch(function(err) {
      logger.log(err)
    })
  },
  get: function (err, req, res, next, id) {
    // TODO
  }
}
