'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mostrar-equipo', {
        url: '/mostrar-equipo',
        templateUrl: 'app/mostrar-equipo/mostrar-equipo.html',
        controller: 'MostrarEquipoCtrl'
      });
  });
