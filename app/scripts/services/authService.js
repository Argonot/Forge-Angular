/**
 * Created by Meidi on 15/08/2015.
 */

angular.module('forgeApp').factory("AuthService", function($http, CONFIG, ROUTES, Session) {
  var authService = {};

  authService.login = function (credentials) {
    return $http({
      method : 'POST',
      url: CONFIG.authenticator + ROUTES.authenticateUser,
      data : credentials})
      .then(function (res) {
        Session.create(res.data.sessionId, res.data.id,
          res.data.role);
        return res.data;
      });
  };

  authService.isAuthenticated = function () {
    return !!Session.userId;
  };

  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
    authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  return authService;
}).service('Session', function () {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
});
