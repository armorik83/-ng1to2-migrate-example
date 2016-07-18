(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppList', function() {
      return {
        restrict: 'E',
        template:
        '<ul>' +
          '<li ng-repeat="country in $ctrl.countries">' +
            '<pp-country-row ' +
              'code="country.code" ' +
              'population="country.population" ' +
            '></pp-country-row>' +
          '</li>' +
        '</ul>',
        controllerAs: '$ctrl',
        controller: [
          'CountriesService',
          function listController(CountriesService) {
            var _this = this;

            CountriesService.get().then(function(countries) {
              _this.countries = countries;
            });
          }
        ]
      };
    });
})();
