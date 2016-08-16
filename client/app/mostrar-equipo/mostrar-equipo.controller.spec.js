'use strict';

describe('Controller: MostrarEquipoCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var MostrarEquipoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MostrarEquipoCtrl = $controller('MostrarEquipoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
