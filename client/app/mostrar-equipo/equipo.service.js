'use strict';

angular.module('clubEstudiantesApp')
  .factory('EquipoService', function($resource){
    return $resource('/api/equipo/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      }
    });
  });
