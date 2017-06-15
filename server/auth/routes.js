var router = require('express').Router()
var controller = require('./controller')
var verifyUser = require('./auth').verifyUser

router.post('/login', verifyUser(), controller.login)

module.exports = router
