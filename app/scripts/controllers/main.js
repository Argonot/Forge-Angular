'use strict';

/**
 * @ngdoc function
 * @name forgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forgeApp
 */
angular.module('forgeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://127.0.0.1:8080/forge-api/tools/list').success(function(response) {$scope.tools = response});
    $scope.date = new Date();
  });
