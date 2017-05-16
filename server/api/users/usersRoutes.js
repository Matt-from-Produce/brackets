var router = require('express').Router()
var logger = require('../../utils/logger')
var controller = require('./usersController')

// if id was passed, run params
router.param('id', controller.params)

// root
router.route('/')
  .get(controller.get)
  .post(controller.post)

// root w/ id
router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router
