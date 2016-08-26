'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('socios', {
        url: '/socios',
        templateUrl: 'app/socios/socios.html',
        controller: 'SociosCtrl'
      })
      .state('ver-socios', {
        url: '/ver-socios',
        templateUrl: 'app/socios/ver-socios.html',
        controller: 'VerSociosCtrl'
      });
  });
