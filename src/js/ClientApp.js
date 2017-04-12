import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

// first react component
var div = React.DOM.div

// convenience method not really necessary so we'll see
var MyTitleFactory = React.createFactory(MyTitle)

// blueprint
var FirstComp = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'poops hello', color: 'peru'}),
        MyTitleFactory({title: 'testing 1 2', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'im a little teapot', color: 'moccasin'}),
        MyTitleFactory({title: 'short and stout', color: 'tomato'})
      )
    )
  }
})

// instantiate blueprint (with createElement()) and put it on the dom (with render())
ReactDOM.render(React.createElement(FirstComp), document.getElementById('app'))
