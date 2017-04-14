var router = require('express').Router()
var logger = require('../../utils/logger')

// boilerplate
router.route('/')
  .get(function(req, res) {
    logger.log('hey from brackets route')
    res.send({ok: true})
  })
router.route('/test')
  .get(function(req, res) {
    logger.log('suh dude')
    res.send({ok: true})
  })

module.exports = router
