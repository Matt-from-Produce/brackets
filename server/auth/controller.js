var User = require('../api/users/usersModel')
var signToken = require('./auth').signToken

module.exports = {
  login: function(req, res, next) {
    var token = signToken(req.user)
    res.json({token: token})
  }
}
