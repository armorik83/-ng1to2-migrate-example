(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppList', function() {
      return {
        restrict: 'E',
        template: '<p>list</p>',
        controllerAs: '$ctrl',
        controller: [
          'CountriesService',
          function listController(CountriesService) {
            console.log(CountriesService);
          }
        ]
      };
    });

})();
