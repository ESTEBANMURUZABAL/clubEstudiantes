'use strict';

angular.module('clubEstudiantesApp')
  .controller('SociosCtrl', function ($scope, $http, SocioService, socket, Modal, Auth) {
   var self = $scope;
     self.newSocio = {};
      window.scrollTo(0,0);

    
      self.sendMail = Modal.confirm.delete(function () {

        var data = ({
            socioName : self.newSocio.name,
            socioDomicilio : self.newSocio.domicilio,
            socioLocalidad : self.newSocio.localidad,
            socioProvincia : self.newSocio.provincia,
            socioEmail : self.newSocio.email,
            socioDOB : self.newSocio.dob,
            socioPhone : self.newSocio.phone,
            socioNuevo : self.newSocio.socioNuevo,
            socioCategoria : self.newSocio.categoria
        });

        // Simple POST request example (passing data) :
        $http.post('/socio-form', data).
            success(function(data, status, headers, config) {
                console.log('Success' + data);
                self.newSocio = {};
            }).
            error(function(data, status, headers, config) {
                console.log('Success' + data);
                self.newSocio = {};
            });
      });


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
