/**
 * Created by Meidi on 15/08/2015.
 */
'use strict';

angular.module('forgeApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, $cookieStore, AUTH_EVENTS, CONFIG, AuthService) {
    $scope.credentials = {
      email : '',
      password : '',
      auid : CONFIG.auid
    };

    $scope.login = function(credentials) {
      AuthService.login(credentials).then(function(user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
        $cookieStore.put('currentUser', $scope.currentUser);
        $location.url('/');
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    }
  });
