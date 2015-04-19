(function () {
  'use strict';

  function AppController ($router) {
    $router.config([
      { path: '/',     redirectTo: '/home' },
      { path: '/home',  component: 'home' },
      { path: '/edit/:id',  component: 'edit' },
      { path: '/about', component: 'about' }
    ]);
  }

  angular.module('app', [
    'app.home',
    'app.edit',
    'app.about',
    'ngNewRouter'
  ])
  .controller('AppController', ['$router', AppController]);
})();
