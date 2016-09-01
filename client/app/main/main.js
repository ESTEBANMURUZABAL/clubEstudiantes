'use strict';

angular.module('clubEstudiantesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('noticias1', {
        url: '/noticias-1',
        templateUrl: 'app/main/noticia1.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
       .state('noticias2', {
        url: '/noticias-2',
        templateUrl: 'app/main/noticia2.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
       .state('noticias3', {
        url: '/noticias-3',
        templateUrl: 'app/main/noticia3.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
