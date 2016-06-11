'use strict';

var angular = require('angular');
require( 'angular-bootstrap-npm' );
require( 'angular-animate' );

angular.module("weatherApp", ['ngAnimate', 'ui.bootstrap']);

require("./controllers/mainCtrl.js");
require("./services/dataService.js");
require("./directives/welcome.js");