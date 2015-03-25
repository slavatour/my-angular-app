'use strict';

/* jasmine specs for controllers go here */

describe('controllers -> ProductsListController', function() {
  beforeEach(module('app'));

  var ctrl, scope, $httpBackend;
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('phones/phones.json').
      respond([{name:'Nexus 7'},{name:'Nokia 900'}]);

    scope = $rootScope.$new();

    ctrl = $controller('ProductsListController', {$scope: scope});
  }));

  it("should create phones list with 2 phones, fetched from xhr", function() {
    expect(scope.phones).toBeUndefined();

    $httpBackend.flush();

    expect(scope.phones).toEqual([{name:'Nexus 7'},{name:'Nokia 900'}]);
  });

});
