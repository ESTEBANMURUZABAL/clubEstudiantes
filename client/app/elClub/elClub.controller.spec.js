'use strict';

describe('Controller: ElClubCtrl', function () {

  // load the controller's module
  beforeEach(module('clubEstudiantesApp'));

  var ElClubCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElClubCtrl = $controller('ElClubCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
