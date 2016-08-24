'use strict';

angular.module('clubEstudiantesApp')
  .controller('NavbarController', function ($scope, $http, socket, $state, Auth, $location) {
   var self = $scope;

   self.url = $location.url();
   self.isHomePage = function(){
    if($location.url() === "") return true;
    else false;
   }
});
