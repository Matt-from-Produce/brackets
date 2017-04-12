import React from 'react'

// first react component
var div = React.DOM.div
var h1 = React.DOM.h1

// blueprint
var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color } }, this.props.title)
      )
    )
  }
})

export default MyTitle
