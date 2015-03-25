'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainController', ['$scope', function($scope){

}]);

controllers.controller('ProductsList', ['$scope', '$http', function($scope, $http){
    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
    });
}]);