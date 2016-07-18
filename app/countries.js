(function() {
  'use strict';

  angular
    .module('population')
    .service('CountriesService', [
      '$resource',
      '$q',
      function countriesService($resource, $q) {
        var _this = this;
        this.$resource = $resource('app/resources/countries.json', {}, {
          get: {method: 'GET', isArray: true}
        });

        this.get = function() {
          var deferred = $q.defer();
          if (_this.countries) {
            deferred.resolve(_this.countries);
            return deferred.promise;
          }

          _this.$resource.get(function(res) {
            _this.countries = res;
            deferred.resolve(_this.countries);
          });
          return deferred.promise;
        };
      }
    ]);
})();
