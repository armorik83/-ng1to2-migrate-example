(function() {
  'use strict';

  angular
    .module('population')
    .filter('codeToName', function() {
      return function(code) {
        var map = {
          CN: '中華人民共和国',
          IN: 'インド',
          US: 'アメリカ合衆国',
          ID: 'インドネシア',
          BR: 'ブラジル',
          PK: 'パキスタン',
          NG: 'ナイジェリア',
          BD: 'バングラデシュ',
          RU: 'ロシア',
          JP: '日本',
          MX: 'メキシコ'
        };

        return map[code];
      };
    });
})();
