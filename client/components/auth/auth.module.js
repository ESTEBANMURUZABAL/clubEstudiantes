'use strict';

angular.module('clubEstudiantesApp.auth', [
  'clubEstudiantesApp.constants',
  'clubEstudiantesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
