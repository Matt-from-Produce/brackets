var React = require('react')
var ReactDOMServer = require('react-dom/server')
var StaticRouter = require('react-router-dom').StaticRouter
var ServerStyleSheet = require('styled-components').ServerStyleSheet
var fs = require('fs')
var _ = require('lodash')
var baseTemplate = fs.readFileSync('./index.html') // TODO change to async function maybe
var template = _.template(baseTemplate)
var sheet = new ServerStyleSheet()
var something = sheet.collectStyles(App)
var css = sheet.getStyleTags()
var App = require('../src/js/App').default

const isomorphic = (req, res, next) => {
  var context = {}
  var body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context },
      React.createElement(App)
    )
  )

  if (context.url) {
    // TODO if there is a redirect
  }

  res.write(template({body: body}))
  res.end()
}

function isomorphic2() {
  return function(req, res, next) {
    if (req.url !== '/') {
      console.log('hit not root')
      next()
    } else {
      var context = {}
      var body = ReactDOMServer.renderToString(
        React.createElement(StaticRouter, { location: req.url, context },
          React.createElement(App)
        )
      )

      console.log('bitch?');

      if (context.url) {
        // TODO if there is a redirect
      }

      res.write(template({body: body}))
      res.end()
    }
  }
}

module.exports = isomorphic
