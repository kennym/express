var React = require("react");
var ReactDOM =require("react-dom");

var H1C = React.createClass({
  render: function() {
    return React.createElement("h1", { className: "green" },
      "Hello from Webpack with config!");
  }
});

ReactDOM.render(React.createElement(H1C), document.getElementById('example'));
