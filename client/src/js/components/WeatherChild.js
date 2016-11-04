//child of weather
var React=require('react');
var obj={};
var RowComponent=require('./grand.js');
var WeatherChild=React.createClass({

// Function to convert time to UTC
changeTime: function(time) {
    var date = new Date(time);
    return date.toUTCString();
},

// Function to convert temperature from Kelvin to Celsius
changeTemp: function(temp){
  var tmp = Math.round(temp)-273;
  return tmp;
},

 render:function(){
     var array=[];
     var timer,description,pressure,humidity,speed,temp,temp_min;
     var rows = $.map(this.props.data1, function(value, index){return value; });

    //Loop to retrieve weather data of 5 days every 3 hours
    for(var i=4;i<rows.length;i++){
    timer = rows[i].dt_txt;
    description = rows[i].weather[0].description;
    pressure = rows[i].main.pressure;
    humidity = rows[i].main.humidity;
    speed = rows[i].wind.speed;
    temp = rows[i].main.temp;
    temp_min = rows[i].main.temp_min;
    array.push(<RowComponent temp={this.changeTemp(temp)} timer={this.changeTime(timer)} temp_min={this.changeTemp(temp_min)} description={description} pressure={pressure} humidity={humidity} speed={speed} />);
    }
   return(
        <div>
            <h3> 5 day / 3 hour Weather Forecast in {this.props.data1.city.name}, {this.props.data1.city.country}</h3>
            <div className="tab">
                <table className="table table-bordered table-hover my_table">
                    <tbody>{array}</tbody>
                </table>
            </div>
        </div>
     )
 }
});
module.exports=WeatherChild
