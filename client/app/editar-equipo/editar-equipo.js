'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editar-equipo', {
        url: '/editar-equipo',
        templateUrl: 'app/editar-equipo/editar-equipo.html',
        controller: 'EditarEquipoCtrl'
      });
  });
