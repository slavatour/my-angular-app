'use strict';

var services = angular.module("services", []);

services.factory('$httpPhone', ['$http', function($http){
    function getPhone(id, scope) {
        $http.get('phones/'+ id + '.json').
            success(function(data){
                scope.phoneData = data;
            }).
            error(function(error){

            });
    }

    return {
        getPhone: getPhone
    }
}]);