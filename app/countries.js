(function() {
  'use strict';

  angular
    .module('population')
    .service('CountriesService', [
      '$resource',
      function countriesService($resource) {
        this.$resource = $resource('app/resources/countries.json', {}, {
          get: {method: 'GET', isArray: true}
        });

        this.get = this.$resource.get;
      }
    ]);
})();
