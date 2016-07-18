(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppCountryRow', function() {
      return {
        restrict: 'E',
        template:
        '<img ng-src="{{$ctrl.flagSrc}}">{{$ctrl.code}} {{$ctrl.population}}',
        bindToController: {
          code: "=",
          population: "="
        },
        controllerAs: '$ctrl',
        controller: [
          function countryRowController() {
            this.flagSrc = 'app/resources/' + this.code + '.png';
          }
        ]
      };
    });
})();
