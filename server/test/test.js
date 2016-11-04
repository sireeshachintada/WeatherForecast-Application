var should = require("chai").should(),
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing weather data", function(err){
 it.skip("I am passing weather data and testing the values", function(done){
      url
         .post("/weather")
         .send('Content-Type', /json/)
          .send({
        	"city": {
        		"id": 2643743,
        		"name": "London",
        		"coord": {
        			"lon": -0.12574,
        			"lat": 51.50853
        		},
        		"country": "GB",
        		"population": 0,
        		"sys": {
        			"population": 0
        		}
        	},
        	"cod": "200",
        	"message": 0.0172,
        	"cnt": 1,
        	"list": [{
        		"dt": 1478239200,
        		"main": {
        			"temp": 278.44,
        			"temp_min": 276.51,
        			"temp_max": 278.44,
        			"pressure": 1018.2,
        			"sea_level": 1026,
        			"grnd_level": 1018.2,
        			"humidity": 98,
        			"temp_kf": 1.93
        		},
        		"weather": [{
        			"id": 801,
        			"main": "Clouds",
        			"description": "few clouds",
        			"icon": "02n"
        		}],
        		"clouds": {
        			"all": 12
        		},
        		"wind": {
        			"speed": 2.71,
        			"deg": 218.001
        		},
        		"rain": {},
        		"sys": {
        			"pod": "n"
        		},
        		"dt_txt": "2016-11-04 06:00:00"
        	}]
        })
        .expect(200)
        .expect('Content-Type', /json/)
         .end(function(err,res){
           if(err){throw err;}
           JSON.parse(res.text).name.shoud.be.equal('London');
           parseFloat(res.text).should.be.equal(30);
           done();
         });
 });

it("retrieve the weather details", function(done){
   url
       .get("/weather")
       .expect(200)
       .expect('Content-Type', /json/)
       .end(function(err,res){
         if(err){throw err;}
         JSON.parse(res.text).should.not.be.empty;
         done();
       });

 });

it("update the weather details", function(done){
   url
       .put("/weather/2643743")
        .send('Content-Type', /json/)
        .send({
        "city": {
          "id": 2643745,
          "name": "London",
          "coord": {
            "lon": -0.12574,
            "lat": 51.50853
          },
          "country": "GB",
          "population": 0,
          "sys": {
            "population": 0
          }
        },
        "cod": "200",
        "message": 0.0172,
        "cnt": 1,
        "list": [{
          "dt": 1478239200,
          "main": {
            "temp": 278.44,
            "temp_min": 276.51,
            "temp_max": 278.44,
            "pressure": 1018.2,
            "sea_level": 1026,
            "grnd_level": 1018.2,
            "humidity": 98,
            "temp_kf": 1.93
          },
          "weather": [{
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }],
          "clouds": {
            "all": 12
          },
          "wind": {
            "speed": 2.71,
            "deg": 218.001
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-04 06:00:00"
        }]
        })
       .expect(200)
       .end(function(err,res){
         if(err){throw err;}
         res.text.should.be.equal('Success');
         done();
       });

 });

it("Delete weather details", function(done){
   url
       .delete("/weather/2643745")
       .expect(200)
       .end(function(err,res){
         if(err){throw err;}
         res.text.should.be.equal('Success');
         done();
       });

 });
});
