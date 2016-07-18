(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppList', function() {
      return {
        restrict: 'E',
        template:
        '<ul>' +
          '<li ng-repeat="country in $ctrl.countries">{{country.code}}: {{country.population}}</li>' +
        '</ul>',
        controllerAs: '$ctrl',
        controller: [
          'CountriesService',
          function listController(CountriesService) {
            var _this = this;

            CountriesService.get(function(countries) {
              _this.countries = countries;
            });
          }
        ]
      };
    });
})();
