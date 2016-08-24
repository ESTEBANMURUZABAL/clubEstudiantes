'use strict';

angular.module('clubEstudiantesApp')
  .factory('SocioService', function($resource){
    return $resource('/api/socio/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      }
    });
  });
