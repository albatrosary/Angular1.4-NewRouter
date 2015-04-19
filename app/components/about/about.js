(function () {
  'use strict';

  function AboutController () {
    console.log('AboutController');
  }

  angular.module('app.about', [])
  .controller('AboutController', AboutController);

})();
