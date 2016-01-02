/*eslint-env node*/

var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function(){
        return (

<div>
<h2>Translation</h2>
<div className="col-xs-4">
  <label for="ex1">Enter text to translate</label>
  <input className="form-control" id="ex1" placeholder="Text input" type="text"/>
  <button className="btn btn-default" type="submit">Translate</button>
</div>






</div>
);
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));