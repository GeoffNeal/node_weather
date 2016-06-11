'use strict';

var express = require('express');
var http = require("http");
var router = express.Router();

var APIKEY = "f6d815f76f18ba0f08850d5aa4f03a55";

//CRUD operations****************

router.get("/cityData/:name", function(req, res) { //To get a single specific city.
	var cityName = req.params.name;

	//GET data from openweathermap
	var request = http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&cnt=33&APPID=" + APIKEY, function(response) {
		var body = "";
		response.setEncoding("utf8");

		//If the response is not successful...
		if(response.statusCode !== 200) {
			//Abort the request
			request.abort();
			//Show status code error
			profileEmitter.emit("error", new Error("There was an error getting the data for " + cityName + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
		}

		//Read the data
		response.on("data", function(chunk) {
			body += chunk;
		});

		response.on("end", function() {
			if(response.statusCode === 200) {
				try {
					//Parse the data
					var cityProfile = JSON.parse(body);
					// var values = {
					// 	name: cityProfile.name,
					// 	country: cityProfile.sys.country,
					// 	weather: cityProfile.weather[0].main,
					// 	weather_desc: cityProfile.weather[0].description,
					// 	icon: cityProfile.weather[0].icon,
					// 	temperature: cityProfile.main.temp,
					// 	pressure: cityProfile.main.pressure,
					// 	humidity: cityProfile.main.humidity,
					// 	wind_speed: cityProfile.wind.speed
					// }
					console.log(cityProfile);
					res.send(cityProfile);
				} catch(error) {
					profileEmitter.emit("error", error);
				}
			}
		}).on("error", function(error) {
			profileEmitter.emit("error", error);
		});
	});
});

//******************CRUD operations.

module.exports = router;