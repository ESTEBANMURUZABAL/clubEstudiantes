'use strict';

angular.module('clubEstudiantesApp')
  .controller('ContactoCtrl', function ($scope, $http, ContactoService, socket, $state, Auth) {
   var self = $scope;
   self.newContacto = {};

    self.isAdmin = Auth.isAdmin;

   ContactoService.query(function(contactos){
       self.contactos = contactos;
       socket.syncUpdates('contacto', self.contactos);
   });

   self.addContacto = function(){
     if(!self.newContacto){ return;}
     ContactoService.save(self.newContacto, function(){
       self.newContacto = {};

     });
   };

   self.deleteContacto = function(contacto) {
     ContactoService.delete({id:contacto._id}, function(){
       console.log('contacto deleted')
     })
   };

   self.goToContacto = function(contacto){
     $state.go('view-contacto', {
       id: contacto._id
     });
   };

  self.goBack = function(){
    window.history.back();
  };

   self.$on('$destroy', function() {
        socket.unsyncUpdates('contacto');
   });

  });
