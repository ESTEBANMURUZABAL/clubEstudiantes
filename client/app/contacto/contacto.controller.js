'use strict';

angular.module('clubEstudiantesApp')
  .controller('ContactoCtrl', function ($scope, $http) {
   $scope.postData = {};


    //http://stackoverflow.com/questions/26326027/sending-email-with-node-mailer-and-sendgrid-in-angular-mean-stack-using-angular
    //http://stackoverflow.com/questions/27861722/creating-a-contact-form-in-angular-with-nodemailer

    $scope.postMail = function (contact) {
      // Check form validation
      if ($scope.contactForm.$invalid === true) {
        return
      }
      // wrap all your input values in $scope.postData
      $scope.postData = angular.copy(contact);

      $http.post('/api/contact', $scope.postData)
        .success(function(data) {
          // Show success message
        })
        .error(function(data) {
          // Show error message
        });
    };

  });
