'use strict';

angular.module('clubEstudiantesApp')
  .controller('ContactoCtrl', function ($scope, $http, ContactoService, socket, $state, Auth, Modal) {
   var self = $scope;
   self.newContacto = {};

    this.isAdmin = Auth.isAdmin;

   window.scrollTo(0,0);

/*    if($scope.contactoForm.$valid){*/
      self.sendMail = Modal.confirm.delete(function () {

          var data = ({
              contactName : self.newContacto.name,
              contactEmail : self.newContacto.email,
              contactMsg : self.newContacto.message,
              contactPhone : self.newContacto.phone
          });

          // Simple POST request example (passing data) :
          $http.post('/contact-form', data).
              success(function(data, status, headers, config) {
                  console.log('Success' + data);
                  self.newContacto = {};
              }).
              error(function(data, status, headers, config) {
                  console.log('Success' + data);
                  self.newContacto = {};
              });
        });
/*    }*/

  });
