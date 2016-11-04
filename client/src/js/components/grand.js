// Printing Inbox items and sent items in a table
var React = require('react');
var RowComponent = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.timer}</td>
        <td><span className="my_span">{this.props.temp} &deg;C </span><span className="min_span">{this.props.temp_min} &deg;C </span><p>{this.props.description}</p>
        <p>pressure: {this.props.pressure} hpa</p>
        <p>humidity: {this.props.humidity} %</p>
        <p>wind: {this.props.speed} m/s</p>
        </td>
      </tr>
    );
  }
});
module.exports = RowComponent;
