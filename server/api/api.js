var router = require('express').Router()
var users = require('./users/usersRoutes')
// var brackets = require('./brackets/bracketsRoutes')

router.use('/users', users)

module.exports = router
