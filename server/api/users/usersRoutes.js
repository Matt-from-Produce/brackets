var router = require('express').Router()
var logger = require('../../utils/logger')
var controller = require('./usersController')

// gotta have this up top
// what happens when theres no id?
router.param('id', controller.params)

// boilerplate
router.route('/')
  .get(controller.get)

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router
