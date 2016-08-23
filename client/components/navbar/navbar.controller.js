'use strict';

angular.module('clubEstudiantesApp')
  .controller('MainController', function ($scope, $location, Auth) {
    var self = $scope;



  constructor() {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  console.log($location);

});
