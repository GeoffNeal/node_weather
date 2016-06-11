'use strict';

var angular = require('angular');

angular.module('weatherApp')
.directive('welcome', function(){
  return {
    templateUrl: 'views/welcome.html',
    replace: true,
    controller: 'mainCtrl'
  }
});