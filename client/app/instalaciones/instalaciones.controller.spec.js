'use strict';

describe('Controller: InstalacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var InstalacionesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstalacionesCtrl = $controller('InstalacionesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
