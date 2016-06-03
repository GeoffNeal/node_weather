'use strict';

var angular = require('angular');

angular.module('weatherApp')
.directive('graphDirective', function(){
  return {
    templateUrl: 'views/graph.html',
    replace: true,
    controller: 'mainCtrl'
  }
});