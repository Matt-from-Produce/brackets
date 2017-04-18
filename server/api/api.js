var router = require('express').Router()
var users = require('./users/usersRoutes')
//var brackets = require('./brackets/bracketsRoutes')

// api router mounts other routers for other resources

// router.use('/users', function() {
//   users.get()
// })

// router.use('/users', function() {
//   users.get()
// })
// router.use('/brackets', function() {
//
// })

router.use('/users', users)

module.exports = router
