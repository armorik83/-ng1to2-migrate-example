(function() {
  'use strict';

  angular
    .module('population', ['ngRoute', 'ngResource'])
    .config([
      '$routeProvider',
      '$locationProvider',
      function ($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
            template: '<pp-list></pp-list>'
          })
          .when('/detail/:code', {
            template: '<h1>it works!</h1>' //<pp-country-detail></pp-country-detail>
          })
          .otherwise({
            redirectTo: '/'
          });

        $locationProvider
          .html5Mode(false);
      }
    ])
})();