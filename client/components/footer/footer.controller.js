'use strict';

angular.module('clubEstudiantesApp')
  .controller('FooterController', function ($scope, $http, socket, $state, Auth, $location) {
   var self = $scope;
    self.isAdmin = Auth.isAdmin;
        self.isLoggedIn = Auth.isLoggedIn;


  this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
});
