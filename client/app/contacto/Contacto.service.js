
'use strict';

angular.module('clubEstudiantesApp')
  .factory('ContactoService', function($resource){
    return $resource('/api/contacto/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      }
    });
  });
