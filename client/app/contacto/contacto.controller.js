'use strict';

angular.module('clubEstudiantesApp')
  .controller('ContactoCtrl', function ($scope, $http, ContactoService, socket, $state, Auth, Modal) {
   var self = $scope;
   self.newContacto = {};

    this.isAdmin = Auth.isAdmin;

   window.scrollTo(0,0);

   ContactoService.query(function(contactos){
       self.contactos = contactos;
       socket.syncUpdates('contacto', self.contactos);
   });
    //Modal.confirm.confirm(
    self.addContacto = function() {
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
