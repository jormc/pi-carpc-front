'use strict';

describe('Controller: ClockCtrl', function () {

  // load the controller's module
  beforeEach(module('piCarpcFrontApp'));

  var ClockCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClockCtrl = $controller('ClockCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClockCtrl.awesomeThings.length).toBe(3);
  });
});
