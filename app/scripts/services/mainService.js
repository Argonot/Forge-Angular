/**
 * Created by Meidi on 09/08/2015.
 */

angular.module('forgeApp').factory("toolService", function($http, forgeConfig, forgeWsRoutes) {
  return {
    async: function () {
      return $http.get(forgeConfig.backend + forgeWsRoutes.getAllTools).success(function (response) {
        return response.data;
      });
    }
  };
});
