'use strict';

describe('Controller: EquipoCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var EquipoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquipoCtrl = $controller('EquipoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
