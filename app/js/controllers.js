'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('ProductsList', ['$scope', '$http', function($scope, $http){
    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
    });
}]);


controllers.controller('PhoneController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.routeParams = $routeParams;
}]);