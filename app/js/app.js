'use strict';

var app = angular.module('app', [
    'ngRoute',
    'controllers'
])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phones.html',
            controller: 'ProductsList'
        }).
        when('/phones/:id', {
            templateUrl: 'partials/phone.html',
            controller: 'PhoneController'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);