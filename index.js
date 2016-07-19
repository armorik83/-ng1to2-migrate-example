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
            template: '<pp-country-detail></pp-country-detail>'
          })
          .when('/add', {
            template: '<pp-form></pp-form>'
          })
          .otherwise({
            redirectTo: '/'
          });

        $locationProvider
          .html5Mode(false);
      }
    ])
})();