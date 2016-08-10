'use strict';

describe('Controller: DeportesCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var DeportesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeportesCtrl = $controller('DeportesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
