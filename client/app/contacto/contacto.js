'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacto', {
        url: '/contacto',
        templateUrl: 'app/contacto/contacto.html',
        controller: 'ContactoCtrl'
      });
  });
