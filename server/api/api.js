var router = require('express').Router()
var users = require('./users/usersRoutes')
// var brackets = require('./brackets/bracketsRoutes')

// api router mounts other routers for other resources

// a middleware function with no mount path. This code is executed for every request to the router
// router.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

router.use('/users', users)

module.exports = router
