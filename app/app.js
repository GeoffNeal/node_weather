'use strict';

var angular = require('angular');

angular.module("weatherApp", []);

require("./controllers/mainCtrl.js");
require("./directives/graph.js");
require("./services/dataService.js");