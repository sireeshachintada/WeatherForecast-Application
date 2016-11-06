//Parent class of my App
var React=require('react');
var WeatherChild=require('./WeatherChild');
var fun=false;
var name,country;
var Weather=React.createClass({
 getInitialState :function()
 {
   return({dataArray:[]});
 },

 //Retrive 5 days weather forecast
 getDataWithLocation:function()
 {
   $.ajax({
     url: 'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.cityBar.value+'&appid=749c7cf624f64161972133732e816ea3',
     dataType:'json',
     async:false,
     type:'GET',
     success:function(data)
     {
       fun=true;
       this.setState({dataArray:data.list});
       name = data.city.name;
       country = data.city.country;
     }.bind(this),
     error: function(xhr, status, err)
     {
       console.error(err.toString());
     }.bind(this),
 });
},

 render:function(){
   var done;
   if(fun)
   {
     done=<WeatherChild data1={this.state.dataArray}/>
   }
   return(
     <div>
         <div className="navbar-form" id="search">
           <input type="text" className="form-control border-color"  ref="cityBar" placeholder="Your city name"/>
           <button type="submit" onClick={this.getDataWithLocation} className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
         </div>
         <span className="icon"></span>
         <h3> 5 day Weather Forecast  - {name} , {country}</h3>
       {done}
     </div>
 );
 }
});
module.exports=Weather;
