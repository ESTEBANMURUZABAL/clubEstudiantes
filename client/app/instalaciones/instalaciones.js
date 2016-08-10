'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('instalaciones', {
        url: '/instalaciones',
        templateUrl: 'app/instalaciones/instalaciones.html',
        controller: 'InstalacionesCtrl'
      });
  });
