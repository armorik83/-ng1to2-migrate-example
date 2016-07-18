(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppCountryRow', function() {
      return {
        restrict: 'E',
        template:
        '<img ng-src="{{$ctrl.flagSrc}}">' +
        '{{$ctrl.code | codeToName}} {{$ctrl.population | number}}',
        bindToController: {
          code: "=",
          population: "="
        },
        controllerAs: '$ctrl',
        controller: [
          '$scope',
          '$element',
          function countryRowController($scope, $element) {
            function onClick() {
              console.log('clicked!');
            }

            $element.bind('click', onClick);
            $scope.$on('$destroy', function() {
              $element.unbind('click', onClick);
            });

            this.flagSrc = 'app/resources/' + this.code + '.png';
          }
        ]
      };
    });
})();
