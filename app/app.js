'use strict';

var angular = require('angular');
require( 'angular-bootstrap-npm' );

angular.module("weatherApp", ['ui.bootstrap']);

require("./controllers/mainCtrl.js");
require("./controllers/graphCtrl.js");
require("./directives/graphDirective.js");
require("./services/dataService.js");