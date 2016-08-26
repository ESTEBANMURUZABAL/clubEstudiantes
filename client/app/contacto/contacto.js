'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacto', {
        url: '/contacto',
        templateUrl: 'app/contacto/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .state('ver-contactos', {
        url: '/ver-contactos',
        templateUrl: 'app/contacto/ver-contactos.html',
        controller: 'VerContactoCtrl',
        controllerAs: 'contacto'
      });

  });
