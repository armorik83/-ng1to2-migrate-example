(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppCountryDetail', function() {
      return {
        restrict: 'E',
        template:
          '<a href="/#/">戻る</a>' +
          '<h2>{{$ctrl.country.code | codeToName}}</h2>' +
          '<p>人口:&nbsp;{{$ctrl.country.population | number}}人</p>' +
          '<p>首都:&nbsp;{{$ctrl.country.capital}}</p>',
        bindToController: {},
        controllerAs: '$ctrl',
        controller: [
          'CountriesService',
          '$routeParams',
          function countryDetailController(CountriesService, $routeParams) {
            var _this = this;

            CountriesService.get().then(function(countries) {
              var filtered = countries.filter(function(_country) {
                return _country.code.toLowerCase() === $routeParams.code;
              });
              _this.country = filtered[0];
            });
          }
        ]
      };
    });
})();
