'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('deportes', {
        url: '/deportes',
        templateUrl: 'app/deportes/deportes.html',
        controller: 'DeportesCtrl'
      });
  });
