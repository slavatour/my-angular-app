'use strict';

app.controller('MainController', ['$scope', function($scope){

}])

.controller('ProductsList', ['$scope', '$http', function($scope, $http){
    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
    });
}]);