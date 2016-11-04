var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Weather = require('../models/model.js');

router.post('/weather', function(req, res){
    Weather.create(req.body, function(err,data){
         if(err){
            res.send({response: "not able to display to display anything"});
          }
          else{
            res.send(data);
          }
        });
});
router.get('/weather', function(req, res){
   Weather.findOne(function(err, allData){
        if(err){
          console.log("printing weather data");
          console.log(allData);
          res.send({response: "not able to retrieve weather data"});
        }
        else{
          res.send(allData);
        }
    });
});
router.put('/weather/:id', function(req, res){
    Weather.findOneAndUpdate({
      id: req.params.id
      }, {$set:req.body}, function(err,data){
        if(err){
          res.send({response: "not able to update data"});
        }
        else{
          res.send({response: "updated successfully"});
        }
    });
});
router.delete('/weather/:id', function(req,res){
    Weather.findOneAndRemove({
      id: req.params.id },
      function(err, data){
          if(err){
            res.send({response: "not able to delete records"});
          }
          else{
            res.send({response: "deleted successfully"});
          }
    });
});
module.exports=router;
