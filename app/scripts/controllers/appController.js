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
  .controller('AppCtrl', function ($scope, $cookieStore, $location, toolFactory, USER_ROLES, AuthService) {
    $scope.currentUser = $cookieStore.get('currentUser');
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };
    toolFactory.listTools().success(function(data) {
      $scope.tools = data;
    });
    $scope.logout =  function() {
      $scope.currentUser = null;
      $cookieStore.remove('currentUser');
      $location.url('/');
    }
  });
