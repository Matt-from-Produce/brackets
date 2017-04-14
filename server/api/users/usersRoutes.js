var router = require('express').Router()
var logger = require('../../utils/logger')

// boilerplate
router.route('/')
  .get(function(req, res) {
    logger.log('hey from users route')
    res.send({ok: true})
  })

module.exports = router
