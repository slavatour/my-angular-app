'use strict';

var controllers = angular.module('controllers', ['services']);




controllers.controller('CartController', ['$scope', function($scope){
    $scope.continents = [
        {id:1, continent:'america'},
        {id:2, continent:'africa'},
        {id:2, continent:'europe'}
    ];
    $scope.cart = {
        items: null
    };
    $scope.submitCart = function(){
      console.log("submit", $scope.order);
    };
}]);