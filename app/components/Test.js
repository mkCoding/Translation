var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      wordEntered: 'Hello World',
      translatedWord: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result.text; //translated word
      this.setState({
        translatedWord: lastGist
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        the translation of <b>{this.state.wordEntered}</b> in vietnamese is
        <b> {this.state.translatedWord}</b>.
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20150919T013938Z.732ff6ca5b0c732e.3cba76a9d1de05d91be18996c7ae283b35d1ed93&lang=en-vi&text=Hello+World" />,  document.getElementById('app'));


  //Json url
  //https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20150919T013938Z.732ff6ca5b0c732e.3cba76a9d1de05d91be18996c7ae283b35d1ed93&lang=en-vi&text=Hello+World