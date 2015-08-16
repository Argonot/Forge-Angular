/**
 * Created by Meidi on 09/08/2015.
 */

angular.module('forgeApp').factory("toolFactory", function($http, CONFIG, ROUTES) {
  return {
    listTools: function () {
      return $http.get(CONFIG.backend + ROUTES.getAllTools).success(function (response) {
        return response.data;
      });
    }
  };
});
