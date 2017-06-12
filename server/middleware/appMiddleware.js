var morgan = require('morgan')
var cors = require('cors')
var bodyParser = require('body-parser')

module.exports = function(app) {
  // default to morgan('dev') unless specified by env
  if (process.env.NODE_ENV === 'prod') {
    app.use(morgan('tiny'))
  } else {
    app.use(morgan('dev'))
  }

  // bodyParser helps us send and recieve json data
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(cors())
}
