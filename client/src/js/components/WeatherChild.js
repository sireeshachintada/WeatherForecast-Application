//child of weather
var React=require('react');
var RowComponent=require('./grand.js');
var WeatherChild=React.createClass({

 render:function(){
    var array=[];
    var timer,description,pressure,humidity,speed,temp;

    // retrieve 5 days weather
    this.props.data1.forEach(function(mydata){
       timer = mydata.dt_txt;
       var myDate = new Date(timer);
       description = mydata.weather[0].description;
       pressure = mydata.main.pressure;
       humidity = mydata.main.humidity;
       speed = mydata.wind.speed;
       temp = mydata.main.temp;
       if(myDate.getHours() === 21){
          array.push(<RowComponent temp={temp} timer={timer} description={description}
          pressure={pressure} humidity={humidity} speed={speed} key={mydata.dt}/>);
       }
     });

   return(
        <div>
            <div className="tab">
                <table className="table table-bordered table-hover my_table">
                    {array}
                </table>
            </div>
        </div>
     )
 }
});
module.exports=WeatherChild
