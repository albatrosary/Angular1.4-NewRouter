(function () {
  'use strict';

  function EditController ($routeParams) {

    console.log($routeParams.id);

    var vm = this;
    vm.add = function () {
      var dataStore = new Firebase('https://sweltering-inferno-4088.firebaseIO.com/');
      dataStore.child('names').push({
        'name': vm.name,
        'age': vm.age
      });
    };
  }

  angular.module('app.edit', [])
  .controller('EditController', EditController);
})();
