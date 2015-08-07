'use strict';

/**
 * @ngdoc function
 * @name forgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forgeApp
 */
angular.module('forgeApp')
  .controller('MainCtrl', function ($scope) {
    var tools = [
      {
        "urlImage": "http://test1.jpg",
        "name": "Titre1",
        "desc": "Titre de l'outil 1"
      },
      {
        "urlImage": "http://test2.jpg",
        "name": "Titre2",
        "desc": "Titre de l'outil 2"
      }
    ];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.date = new Date();
    $scope.tools = tools;
  });
