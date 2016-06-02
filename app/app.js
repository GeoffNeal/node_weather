'use strict';

var angular = require('angular');
require( 'angular-bootstrap-npm' );

angular.module("weatherApp", ['ui.bootstrap']);

require("./controllers/mainCtrl.js");
require("./directives/graph.js");
require("./services/dataService.js");