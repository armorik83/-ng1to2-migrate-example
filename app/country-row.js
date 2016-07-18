(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppCountryRow', function() {
      return {
        restrict: 'E',
        template:
        '{{$ctrl.code}} {{$ctrl.population}}',
        bindToController: {
          code: "=",
          population: "="
        },
        controllerAs: '$ctrl',
        controller: [
          function countryRowController() {
            //
          }
        ]
      };
    });
})();
