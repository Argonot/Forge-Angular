'use strict';

/**
 * @ngdoc function
 * @name forgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forgeApp
 */
angular.module('forgeApp')
  .controller('MainCtrl', function ($scope, toolService) {
    toolService.async().success(function(data) {
      $scope.tools = data;
    });
    $scope.date = new Date();
  });
