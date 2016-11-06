// Printing Inbox items and sent items in a table
var React = require('react');
var RowComponent = React.createClass({

  // split date and convert to string format
  changeTime:function(time) {
      var date = new Date(time) + '';
      var split = date.split(' ');
      var a = split[0]+', '+split[2] + ' ' + split[1];
      return a.toString();
  },

  // Function to convert temperature from Kelvin to Celsius
  changeTemp:function(temp){
    var tmp = Math.round(temp)-273;
    return tmp;
  },
  render: function() {
    return (
      <tbody>
        <tr>
            <thead>
              <th>{this.changeTime(this.props.timer)} <p><span className="my_span">{this.changeTemp(this.props.temp)} &deg;C </span></p></th>
            </thead>
            <tr>
              <td><span className="min_span">{this.props.description}</span> <p>wind:  {this.props.speed} m/s </p>
              <p> pressure:  {this.props.pressure} hpa</p><p> humidity:  {this.props.humidity} %</p></td>
            </tr>
        </tr>
      </tbody>
    );
  }
});
module.exports = RowComponent;
