webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("weatherApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('weatherApp')
	.directive('graph', function(){
	  return {
	    templateUrl: 'views/graph.html',
	    replace: true,
	    controller: 'mainCtrl'
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

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

/***/ }
]);