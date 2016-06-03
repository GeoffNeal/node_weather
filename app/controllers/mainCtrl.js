var angular = require("angular");

angular.module("weatherApp")
//Create controller.
.controller("mainCtrl", function($scope, dataService) {

	/*
	* If the submit button is clicked the data is sent,
	* but if the user presses the return key nothing will happen.
	* So this block of code triggers the click event on the submit button
	* if the return key is pressed.
	*/
	document.getElementById("searchBar")
	.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode == 13) {
	        document.getElementById("submit").click();
	    }
	});

	//Get the user input then call the getData method.
	$scope.sendData = function() {
		dataService.getData($scope.userInput, function(response) {
			var data = response.data;
			var iconUrl = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
			console.log(data);
			console.log(iconUrl);

			//Set the variables to the $scope.
			$scope.date = data.list[0].dt_txt;
			$scope.cityName = data.city.name;
			$scope.cityCountry = data.city.country;
			$scope.cityWeather = data.list[0].weather[0].main;
			$scope.cityWeatherDesc = data.list[0].weather[0].description;
			$scope.cityIcon = iconUrl;
			$scope.cityTemp = data.list[0].main.temp;
			$scope.cityPressure = data.list[0].main.pressure;
			$scope.cityHumidity = data.list[0].main.humidity;
			$scope.cityWindSpeed = data.list[0].wind.speed;

			var yValuesArray1 = [];
			var yValuesArray2 = [];
			var yValuesArray3 = [];
			var yValuesArray4 = [];
			var xValuesArray = [];

			function populateArray(){
	            for (var i = 0; i < data.list.length; i++) {
	              var containerArr = [];
	              yValuesArray1.push(data.list[i].main.temp);
	              yValuesArray2.push(data.list[i].main.pressure);
	              yValuesArray3.push(data.list[i].wind.speed);
	              yValuesArray4.push(data.list[i].main.humidity);
	              xValuesArray.push(data.list[i].dt_txt);
	              containerArr.push(xValuesArray, yValuesArray1, yValuesArray2, yValuesArray3, yValuesArray4);
	            };
	            return containerArr;
	        };
	        console.log(populateArray());
		});
	}
});