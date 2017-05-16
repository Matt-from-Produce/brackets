var User = require('../api/users/usersModel')
var signToken = require('./auth').signToken

module.exports = {
  signin: function(req, res, next) {
    var token = signToken(req.user._id)
    res.json({token: token})
  }
}
