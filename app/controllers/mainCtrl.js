'use strict';

var angular = require("angular");
var d3 = require("d3");

angular.module("weatherApp")
//Create controller.
.controller("mainCtrl", function($scope, dataService) {

	/*
	* If the submit button is clicked the data is sent,
	* but if the user presses the return key nothing will happen.
	* So this block of code triggers the click event on the submit buttons
	* in the mainCtrl and graphCtrl (will not work if user clicks the 
	* submit button) if the return key is pressed.
	*/
	document.getElementById("searchBar")
	.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode == 13) {
	        document.getElementById("submit1").click();
	        document.getElementById("submit2").click();
	    }
	});

	//Get the user input then call the getData method.
	$scope.sendData = function() {
		dataService.getData($scope.userInput, function(response) {
			var data = response.data;
			var iconUrl = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
			var parseTime = d3.time.format("%Y%m%d%H%M%S"); //Format the time and date.

			//Set the $scope variables.
			$scope.data = data;
			$scope.cityIcon = iconUrl;
			$scope.dataType = 1;

			if (document.getElementById("mainGraph")) { //If there is already a graph from a prevoius search...
			    document.getElementById("graph").removeChild(document.getElementById("mainGraph")); //Remove it.
			}


			//Find the largest value in the dataset to go along the y axis.
			var yMax = d3.max(organiseArray()[
                (function() {
                    switch ($scope.dataType) {
                	    case 2:
                  		    return 2;
                  		    break;
                	    case 3:
                            return 3;
                            break;
                        case 4:
                            return 4;
                            break;
                	    default:
                  		    return 1;
                    };
                })()
            ], function(element) {
              return element + 1;
            });

			//Find the smallest value in the dataset to go along the y axis.
	        var yMin = d3.min(organiseArray()[
	            (function() {
                    switch ($scope.dataType) {
                	    case 2:
                  		    return 2;
                  		    break;
                	    case 3:
                            return 3;
                            break;
                        case 4:
                            return 4;
                            break;
                	    default:
                  		    return 1;
                    };
                })()
	        ], function(element) {
	            if((element - 1) < 0) {
	                return 0;
	            } else {
	                return element - 1;
	            };
	        });

	        //Find the smallest value in the dataset to go along the x axis.
	        var xMin = d3.min(dateTxtParser(organiseArray()[0], null), function(element) {
	            var time = element;
	            time.setTime(time.getTime() - 10800000);
	            return time;
	        });

	        //Find the largest value in the dataset to go along the x axis.
	        var xMax = d3.max(dateTxtParser(organiseArray()[0], null), function(element) {
	            var time = element;
	            time.setTime(time.getTime() + 21600000);
	            return time;
	        });




			//Returns an array that is made up of arrays of each of the values in the list.
			function organiseArray(){

				/*
				* The yValuesArrays are to contain the measurable properties (temperature,
				* pressure etc), whereas the xValuesArray contains the list of dates on which
				* the measurable properties were recorded. These will go along the x axis.
				*/
				var yValuesArray1 = [];
				var yValuesArray2 = [];
				var yValuesArray3 = [];
				var yValuesArray4 = [];
				var xValuesArray = [];

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

	        /*
	        * Take the date values from xValuesArray and parse them in to
	        * a time that can be read by d3.
	        */
	        function dateTxtParser(array, value) {
	        	if(array !== null && value === null) {
	        		var timeArr = [];
		            for(var i = 0; i < array.length; i++) {
		              var step1 = array[i].replace(/-/g, "");
		              var step2 = step1.replace(/:/g, "");
		              var step3 = step2.replace(/\ /g, "");
		              var time = parseTime.parse(step3);
		              timeArr.push(time);
		            }
		            return timeArr;
		        //If a single value is passed to the function instead of an array...
	        	} else if(array === null && value !== null) {
	        		var parsedValue = parseTime.parse(value);
	        		return parsedValue;
	        	}
	            
	        }

	        function finalArr(array) {
	            var arrOfDestiny = [];
	            for(var i = 0; i < data.list.length; i++) {
	              var valStore = [];
	              valStore.push(dateTxtParser(array[0], null)[i], array[1][i], array[2][i], array[3][i], array[4][i]);
	              arrOfDestiny.push(valStore);
	            }
	            return arrOfDestiny;
	        }

	        var dataObjects = finalArr(organiseArray()).map(function(d) {
	            return {
	                date: d[0],
	                close: d[
	                    (function() {
		                    switch ($scope.dataType) {
		                	    case 2:
		                  		    return 2;
		                  		    break;
		                	    case 3:
		                            return 3;
		                            break;
		                        case 4:
		                            return 4;
		                            break;
		                	    default:
		                  		    return 1;
		                    };
		                })()
	                ]
	            }
	        });

	        function drawGraph() {

	        	//Get container width.
	        	var container = document.getElementById("mainContainer");
	        	var containerWidth = parseFloat(window.getComputedStyle(container, null).getPropertyValue("width"));
	        	console.log(containerWidth);

	        	//Set graph width to match container.
	        	document.getElementById("graph").style.width = containerWidth;
	        	var width = containerWidth;
	        	var height = width / 2.3;
	        	var padding = 70;
	        	console.log(width);
	        	console.log(height);

	        	//Define the scale for the x axis.
			    var xScale = d3.time.scale() 
			                 .range([0, width]);
			                  
			    //Define the scale for the y axis.
			    var yScale = d3.scale.linear() 
			                 .range([height, 0]);
			                  
			    //Set up the y axis
			    var yAxis = d3.svg.axis().scale(yScale) 
			                .orient("left");
			                  
			    //Set up the x axis 
			    var xAxis = d3.svg.axis().scale(xScale) 
			                .orient("bottom")
			                .ticks(20);

			    yScale.domain([yMin, yMax]);

                xScale.domain([xMin, xMax]);
			      
			    //Position the graph.
			    var svg = d3.select("#graph") 
			            .append("svg")
			            .attr("id", "mainGraph")
			            .attr("height", height + padding * 2)
			            .attr("width", width + padding * 2)
			            .append("g")
			            .attr("id", "svg")
			            .attr("transform", "translate(" + padding + "," + (padding - 30) + ")");





			    var valueline1 = d3.svg.line()
                            .x(function(d) {
                                return xScale(d.date);
                            })
                            .y(function(d) {
                                return yScale(d.close);
                            })
                            .interpolate("cardinal");

                var line1 = svg.append("path") //Add the valueline
                            .attr("stroke", 
                            	(function() {
				                    switch ($scope.dataType) {
				                	    case 2:
				                  		    return "#0a9d6c";
				                  		    break;
				                	    case 3:
				                            return "#976578";
				                            break;
				                        case 4:
				                            return "#05639a";
				                            break;
				                	    default:
				                  		    return "#fd3400";
				                    };
				                })()
                            )
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr("id", "line1")
                            .attr("d", valueline1(dataObjects));

	            //Add x axis
	            svg.append("g")
	                .attr("class", "x axis")
	                .attr("transform", "translate(0," + height + ")")
	                .call(xAxis)
	                .selectAll("text")
	                .attr("transform", function() {
	                    return "rotate(-65)"
	                })
	                .style("text-anchor", "end")
	                .style("font-size", "10px")
	                .attr("dx", "-10px")
	                .attr("dy", "10px");

				svg.append("text")      // text label for the x axis
				    .attr("x", width / 2 )
				    .attr("y",  height + padding)
				    .style("text-anchor", "middle")
				    .text("Date/Time");
				//Add y axis
				svg.append("g")
				.attr("class", "y axis")
				.call(yAxis);

				svg.append("text")
				    .attr("transform", "rotate(-90)")
				    .attr("y", 0 - padding)
				    .attr("x",0 - (height / 2))
				    .attr("dy", "1em")
				    .style("text-anchor", "middle")
				    .text(
				    	function() {
					        switch($scope.dataType) {
					            case 2:
					                return "Pressure (hPa)";
					                break;
					            case 3:
					                return "Wind Speed (meters/sec)";
					                break;
					            case 4:
					                return "Humidity (%)";
					                break;
					            default:
					                return "Temperature (&deg;C)";
					        }
					    }
				    );

				//Add the dots
				var dots = svg.selectAll('circle')
				        .data(dataObjects)
				        .enter()
				        .append('circle');

				for (var i = 0; i < dataObjects.length; i++) {
				    dots.attr({"r": (containerWidth * (function() {
				            if(containerWidth >= 992) {
				                return 0.004;
				            } else {
				                return 0.007;
				            };
				        })()),
				        "cy": function(dataObjects) {
				            return yScale(dataObjects.close)
				        },
				        "cx": function(dataObjects) {
				            return xScale(dataObjects.date)
				        }
				    })
				    .style({
				    	"stroke": "#999",
				        "fill": d3.select("#line1").attr("stroke")
				    });
				};
	        }

	        drawGraph();
	        console.log(dateTxtParser(organiseArray()[0], null));
	        // console.log(dateTxtParser(null, data.list[0].dt_txt)); //Returns null, needs to return a date.
			
		});
	}
});