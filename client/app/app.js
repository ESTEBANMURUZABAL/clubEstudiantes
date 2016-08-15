'use strict';

angular.module('clubEstudiantesApp', [
  'clubEstudiantesApp.auth',
  'clubEstudiantesApp.admin',
  'clubEstudiantesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngtweet'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
