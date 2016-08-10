'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('socios', {
        url: '/socios',
        templateUrl: 'app/socios/socios.html',
        controller: 'SociosCtrl'
      });
  });
