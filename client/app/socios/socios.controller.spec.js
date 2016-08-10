'use strict';

describe('Controller: SociosCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var SociosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SociosCtrl = $controller('SociosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
