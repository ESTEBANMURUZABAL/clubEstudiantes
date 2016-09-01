'use strict';

angular.module('clubEstudiantesApp')
  .controller('NavbarController', function ($scope, $http, socket, $state, Auth, $location) {
   var self = $scope;

     this.isLoggedIn = Auth.isLoggedIn;
       this.isAdmin = Auth.isAdmin;
       this.getCurrentUser = Auth.getCurrentUser;


});
