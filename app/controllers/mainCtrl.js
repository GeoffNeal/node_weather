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
			// $scope.drawings = drawings;
		});
	}
});