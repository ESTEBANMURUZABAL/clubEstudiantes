'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  $('#navbar li').click(function() {
  $(this).addClass('active').siblings('li').removeClass('active');
});
}

angular.module('clubEstudiantesApp')
  .controller('NavbarController', NavbarController);
