'use strict';

var angular = require('angular');

angular.module('weatherApp')
.directive('graph', function(){
  return {
    templateUrl: 'views/graph.html',
    replace: true,
    controller: 'mainCtrl'
  }
});