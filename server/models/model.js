var mongoose = require('mongoose');
var weatherSchema = mongoose.Schema({
 time:Date,
 temp:String,
 humidity:String,
 pressure:String,
 temp_min:String,
 speed:String,
});
module.exports = mongoose.model("weather", weatherSchema);
