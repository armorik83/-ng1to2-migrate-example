(function() {
  'use strict';

  angular
    .module('population')
    .service('CountriesService', [
      '$resource',
      function countriesService($resource) {
        var _this = this;

        this.$resource = $resource('app/resources/countries.json', {}, {
          get: {method: 'GET', isArray: true}
        });

        this.$resource.get().$promise.then(function(res) {
          _this.countries = res;
        });
      }
    ]);

})();
