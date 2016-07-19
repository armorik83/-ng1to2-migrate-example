(function() {
  'use strict';

  angular
    .module('population')
    .directive('ppForm', function() {
      return {
        restrict: 'E',
        template:
          '<a href="/#/">戻る</a>' +
          '<h2>国を追加</h2>' +
          '<form name="$ctrl.form" novalidate>' +
            '<p>' +
              '<label for="code">国コード:</label>' +
              '<input ' +
                'type="text" ' +
                'id="code" ' +
                'placeholder="国コード" ' +
                'name="code" ' +
                'ng-model="$ctrl.code" ' +
                'ng-pattern="\'^[A-Z]{2}$\'" ' +
                'ng-required="true"' +
              '>' +
              '<div ng-if="$ctrl.form.code.$dirty">' +
                '<div ng-if="$ctrl.form.code.$error.required">' +
                  'この項目は必須です。' +
                '</div>' +
                '<div ng-if="$ctrl.form.code.$error.pattern">' +
                  '英大文字2文字を入力してください。' +
                '</div>' +
              '</div>' +
            '</p><p>' +
              '<label for="population">人口:</label>' +
              '<input ' +
                'type="number" ' +
                'id="population" ' +
                'placeholder="人口" ' +
                'name="population" ' +
                'ng-model="$ctrl.population" ' +
                'required' +
              '>' +
              '<div ng-if="$ctrl.form.population.$dirty">' +
                '<div ng-if="$ctrl.form.population.$error.required">' +
                  'この項目は必須です。' +
                '</div>' +
              '</div>' +
            '</p><p>' +
              '<label for="capital">首都:</label>' +
              '<input ' +
                'type="text" ' +
                'id="capital" ' +
                'placeholder="首都" ' +
                'name="capital" ' +
                'ng-model="$ctrl.capital"' +
              '>' +
            '</p>' +
          '</form>' +
          '<button ng-disabled="!$ctrl.form.$valid" ng-click="$ctrl.add()">追加</button>',
        bindToController: {},
        controllerAs: '$ctrl',
        controller: [
          '$scope',
          '$location',
          'CountriesService',
          function formController($scope, $location, CountriesService) {
            var _this = this;

            this.add = function () {
              if (!_this.form.$valid) {
                return;
              }
              CountriesService.add(_this.code, _this.population, _this.capital);
              $location.path('/');
            };
          }
        ]
      };
    });
})();
