controllers.controller('ProductsListController', ['$scope', '$http', '$filter', function($scope, $http){
    $scope.qntProducts = 20;
    $scope.currentList = [];
    $scope.Math = window.Math;
    var pagination = $scope.pagination = {
        currentPage: 1,
        qntPages: null
    };

    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
        pagination.qntPages = Math.ceil(data.length/$scope.qntProducts);
        console.log(pagination);
    });

    $scope.onQntProductsChange = function() {
        pagination.qntPages = Math.ceil($scope.phones.length/$scope.qntProducts);
        console.log(pagination);
    }
}]);