'use strict';

var services = angular.module("services", []);

services.factory('$httpPhone', ['$rootScope', '$http', function($rootScope, $http){
    function getPhone(id) {
        $http.get('phones/'+ id + '.json').
            success(function(data){
                $rootScope.phoneData = data;
            }).
            error(function(error){

            });
    }

    return {
        getPhone: getPhone
    }
}]);