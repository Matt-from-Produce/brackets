var router = require('express').Router()
var controller = require('./controller')
var verifyUser = require('./auth').verifyUser

// TODO add the verifyUser middleware here
router.post('/login', verifyUser(), controller.login)

module.exports = router
