'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('ProductsListController', ['$scope', '$http', function($scope, $http){
    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
    });
}]);


controllers.controller('PhoneController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.routeParams = $routeParams;
}]);

controllers.controller('CartController', ['$scope', function($scope){
    $scope.continents = [{id:1, continent:'america'},{id:2, continent:'africa'},{id:2, continent:'europe'}]

    $scope.submitCart = function(){
      console.log("submit", $scope.order);
    };
}]);