'use strict';

angular.module('forgeApp')
  .constant('CONFIG', {
    'authenticator':'http://localhost:8080/authentificator-api',
    'backend': 'http://localhost:8080/forge-api',
    'version': '0.0.1',
    'auid' : 'FRG'
  });
