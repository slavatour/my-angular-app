'use strict';

var app = angular.module('app', [
    'ngRoute',
    'controllers'
])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phones.html',
            controller: 'ProductsListController'
        }).
        when('/phones/:id', {
            templateUrl: 'partials/phone.html',
            controller: 'PhoneController'
        }).
        when('/shopping-cart', {
            templateUrl: 'partials/cart.html',
            controller: 'CartController'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);