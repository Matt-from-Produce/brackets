var express = require('express') // express!
var bodyParser = require('body-parser') // 3rd party middlware!
var path = require('path') // built-in middleware! (comes w/ node)
var morgan = require('morgan') // 3rd party middleware!
var _ = require('lodash') // 3rd party middleware!
var PORT = 3000 // the port we will host on

// make app
var app = express()

// serve from brackets folder and it will default to index on get '/'
app.use(express.static('brackets'))

// use morgan: uses dev by default
if (process.env.NODE_ENV === 'prod') {
  app.use(morgan('tiny'))
} else {
  app.use(morgan('dev'))
}

// bodyParser helps us send and recieve json data
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// send index.html on GET request to '/'
app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// give the bundle when its requested
app.get('/dist/bundle.js', function(req, res) {
  res.sendFile(path.resolve('dist/bundle.js'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// give the source-map when its requested
app.get('/dist/bundle.js.map', function(req, res) {
  res.sendFile(path.resolve('dist/bundle.js.map'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// listen
app.listen(PORT, function() {
  console.log('poopies listening 3000')
})
