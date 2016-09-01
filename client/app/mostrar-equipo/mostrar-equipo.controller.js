'use strict';

angular.module('clubEstudiantesApp')
   .controller('EquipoCtrl', function ($scope, $http, EquipoService, socket, $state, Auth) {
     var self = $scope;
       self.newEquipo = {};
        window.scrollTo(0,0);

       EquipoService.query(function(equipos){
           self.equipos = equipos;
           socket.syncUpdates('equipo', self.equipos);
       });

       self.addEquipo = function(){
         if(!self.newEquipo){ return;}
         EquipoService.save(self.newEquipo, function(){
           self.newEquipo = {};

         });
       };

       self.deleteEquipo = function(equipo) {
         EquipoService.delete({id:equipo._id}, function(){
           console.log('equipo deleted')
         })
       };

       self.goToEquipo = function(equipo){
         $state.go('view-equipo', {
           id: equipo._id
         });
       };

       self.goBack = function(){
        window.history.back();
       };

       self.$on('$destroy', function() {
            socket.unsyncUpdates('equipo');
       });
  });
