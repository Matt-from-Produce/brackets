var router = require('express').Router()

// api router mounts other routers for other resources

router.use('/users', require('./users/usersRoutes'))
router.use('/brackets', require('./brackets/bracketsRoutes'))

module.exports = router
