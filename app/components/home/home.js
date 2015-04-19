(function () {
  'use strict';

  function HomeController ($rootScope) {

    var vm = this;

    var dataStore = new Firebase('https://sweltering-inferno-4088.firebaseIO.com/');

    vm.names = [];

    //ノードが追加された場合のコールバック処理
    dataStore.child('names')
    .on('child_added', function(dataSnapshot) {
      var val = dataSnapshot.val();

      if(!$rootScope.$$phase) {
        $rootScope.$apply(function() {
          vm.names.push(angular.fromJson(JSON.stringify(val)));
        });
      }
    });
  }

  angular.module('app.home', [])
  .controller('HomeController', HomeController);

})();