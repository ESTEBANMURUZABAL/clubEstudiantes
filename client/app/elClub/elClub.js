'use strict';

angular.module('clubEstudiantesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('elClub', {
        url: '/elClub',
        templateUrl: 'app/elClub/elClub.html',
        controller: 'ElClubCtrl'
      });
  });
