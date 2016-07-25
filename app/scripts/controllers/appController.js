/**
 * Created by Meidi on 15/08/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name forgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forgeApp
 */
angular.module('forgeApp')
  .controller('AppCtrl', function ($scope, $cookieStore, $location, toolFactory) {
    toolFactory.listTools().success(function(data) {
      $scope.tools = data;
    });
    $scope.date = new Date();
  });
