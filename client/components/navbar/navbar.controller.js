'use strict';

class NavbarController {
  //start-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }


}

angular.module('clubEstudiantesApp')
  .controller('NavbarController', NavbarController);
