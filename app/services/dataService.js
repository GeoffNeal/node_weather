var angular = require("angular");

angular.module("weatherApp")
//Create service.
.service("dataService", function($http) {
	
	//Get the data.
	this.getData = function(city, cb_response) {
		$http.get("/api/" + city).then(cb_response);
	}

	// this.getDrawings = function(cb_response) {
	// 	$http.get('/api/drawings').then(cb_response);
	// };

});