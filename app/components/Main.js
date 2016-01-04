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
  <form role = "form">
   <div class = "form-group">
      <textarea id="fromText" class = "form-control" rows = "3"></textarea>
   </div>
</form>
</div>

<div className="col-xs-4">
  <label for="ex2" id="ex2">Resulting Text</label>
  <form role = "form">
   <div class = "form-group">
      <textarea id="toText" class = "form-control" rows = "3"></textarea>
   </div>
</form>
</div>
  
<button className="btn btn-default" type="submit">Translate</button>







</div>
);
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));