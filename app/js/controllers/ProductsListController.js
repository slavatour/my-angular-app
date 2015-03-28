controllers.controller('ProductsListController', ['$scope', '$http', function($scope, $http){
    $scope.qntProducts = 5;
    $scope.currentPage = 0;
    $scope.currentList = [];
    $scope.Math = window.Math;
    $scope.paginationArray = [];

    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
        $scope.paginationArray = $scope.getPaginationArray($scope.qntProducts);
    });

    $scope.getPaginationArray = function(qntProducts) {
        var paginationArray= [];
        var length = $scope.phones ? $scope.phones.length : 0;
        $scope.maxPages = Math.ceil(length / qntProducts);
        for(var i=0; i < $scope.maxPages; i++) {
            paginationArray.push(i);
        }
        return paginationArray;
    };

    $scope.changeQuantity = function(){
        $scope.$apply();
    }
}]);