'use strict';

angular.module('clubEstudiantesApp')
  .controller('SociosCtrl', function ($scope, $http, SocioService, socket, $state, Auth) {
   var self = $scope;
     self.newSocio = {};

      self.isAdmin = Auth.isAdmin;

     SocioService.query(function(socios){
         self.socios = socios;
         socket.syncUpdates('socio', self.socios);
     });

     self.addSocio = function(){
       if(!self.newSocio){ return;}
       SocioService.save(self.newSocio, function(){
         self.newSocio = {};

       });
     };

     self.deleteSocio = function(socio) {
       SocioService.delete({id:socio._id}, function(){
         console.log('socio deleted')
       })
     };

     self.goToSocio = function(socio){
       $state.go('view-socio', {
         id: socio._id
       });
     };

     self.goBack = function(){
      window.history.back();
     };

     self.$on('$destroy', function() {
          socket.unsyncUpdates('socio');
     });
});
