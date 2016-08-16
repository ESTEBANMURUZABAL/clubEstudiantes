'use strict';

describe('Controller: EditarEquipoCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var EditarEquipoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarEquipoCtrl = $controller('EditarEquipoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
