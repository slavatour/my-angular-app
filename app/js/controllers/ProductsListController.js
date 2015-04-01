controllers.controller('ProductsListController', ['$scope', '$http', '$filter', function($scope, $http, $filter){
    $scope.qntProducts = 5;
    $scope.qntProductsArray = [5, 10, 20];
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

    $scope.changeQuantity = function(e){
        console.log($scope.qntProducts);
        var f = $filter('somefilter');
        f([0,1,2,3,4,5,6,7,8,9]);
        $scope.paginationArray = $scope.getPaginationArray($scope.qntProducts);
    }
}]);