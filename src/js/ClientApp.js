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
