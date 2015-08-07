'use strict';

/**
 * @ngdoc function
 * @name forgeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the forgeApp
 */
angular.module('forgeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
